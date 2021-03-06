// eslint-disable-next-line func-names
const AJAXSubmit = (function () {
  function submitData(config, formData) {
    /* the AJAX request... */
    const oAjaxReq = new XMLHttpRequest();

    if (config.updateProgress) {
      oAjaxReq.upload.addEventListener('progress', config.updateProgress);
    }
    if (config.transferComplete) {
      oAjaxReq.addEventListener('load', config.transferComplete);
    }
    if (config.transferFailed) {
      oAjaxReq.addEventListener('error', config.transferFailed);
    }
    if (config.transferCanceled) {
      oAjaxReq.addEventListener('abort', config.transferCanceled);
    }

    oAjaxReq.onreadystatechange = () => { // Call a function when the state changes.
      if (oAjaxReq.readyState === XMLHttpRequest.DONE) {
        if (oAjaxReq.status >= 400) {
          let message = oAjaxReq.statusText;
          if (oAjaxReq.response && oAjaxReq.response.errors && oAjaxReq.response.errors.file) {
            message = oAjaxReq.response.errors.file;
          }
          config.transferFailed({
            code: oAjaxReq.status,
            message
          });
        }
      }
    };

    oAjaxReq.withCredentials = true;
    /* method is POST */
    oAjaxReq.onloadstart = () => {
      oAjaxReq.responseType = 'json';
    };
    oAjaxReq.open('post', config.url, true);
    oAjaxReq.send(formData);
  }

  function SubmitRequest(config) {
    const formData = new FormData();
    for (let nFile = 0; nFile < config.files.length; nFile++) {
      const oFile = config.files[nFile];
      formData.append(`file[${config.name}]`, oFile);
    }
    formData.append('file[_dp_csrf_token]', config.token);
    submitData(config, formData);
  }

  // eslint-disable-next-line func-names
  return function (config) {
    if (!config.url) { return; }
    config.req = new SubmitRequest(config);
  };
}());

export default AJAXSubmit;
