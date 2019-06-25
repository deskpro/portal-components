---
id: dp-po-Forms
title: Forms
sidebar_label: Forms
---

<h2>input</h2>

<h4>Static</h4>
<form class="dp-po-Forms">
	<input type="" name="" placeholder="Type your email address">
</form>

<h4>Focus<h4>
(browser default focus)</h4>
<form class="dp-po-Forms is-focus">
	<input type="" name="" placeholder="" value="User Input ...">
</form>

<h4>Validation</h4>
<form class="dp-po-Forms is-valid">
	<input type="text" name="" placeholder="" value="User Input ...">
</form>


<h2>input/search-bar</h2>
<h4>Static</h4>
<form class="dp-po-Forms dp-po-Search-bar">
	<input type="" name="" placeholder="How can we help you today?">
	<span class="dp-po-Icon Icon--find Icon--primary"></span>
</form>

<h4>Focus<h4>
<form class="dp-po-Forms dp-po-Search-bar is-focus">
	<input type="" name="" placeholder="How can we help you today?">
	<span class="dp-po-Icon Icon--find Icon--primary"></span>
</form>

<h2>input/search-bar/small</h2>
<h4>Static</h4>
<form class="dp-po-Forms dp-po-Search-bar Search-bar--small">
	<input type="" name="" placeholder="Just ask...">
	<span class="dp-po-Icon Icon--find Icon--primary"></span>
</form>

<h4>Focus</h4>
<form class="dp-po-Forms dp-po-Search-bar Search-bar--small is-focus">
	<input type="" name="" placeholder="Just ask...">
	<span class="dp-po-Icon Icon--find Icon--primary"></span>
</form>

<h2>input/comment-box</h2>
<h4>Static</h4>
<form class="dp-po-Forms dp-po-Textarea">
	<textarea name="text" placeholder="Your comment"></textarea>
</form>

<h4>Focus</h4>
<form class="dp-po-Forms dp-po-Textarea is-focus">
	<textarea name="text" placeholder="Your comment"></textarea>
</form>

<h4>Validation</h4>
<form class="dp-po-Forms dp-po-Textarea is-valid">
	<textarea name="text" placeholder="Your comment"></textarea>
</form>

<h2>login-2/item</h2>
<h4>Static</h4>
<form class="dp-po-Forms">
	<span class="Forms--item-login">
		<input type="" name="" placeholder="">
		<span class="dp-po-login-title">Placeholder Text</span>
	</span>
</form>

<h4>Focus</h4>
<form class="dp-po-Forms">
	<span class="Forms--item-login is-focus">
		<input type="" name="" placeholder="" value="User input">
		<span class="dp-po-login-title">Item label</span>
	</span>
</form>

<h4>Validation</h4>
<form class="dp-po-Forms Forms--item-login is-valid">
	<input type="" name="" placeholder="">
	<span class="dp-po-login-title">Item label</span>
</form>

<h4>Success</h4>
<form class="dp-po-Forms Forms--item-login is-success">
	<input type="" name="" placeholder="" value="User input">
	<span class="dp-po-login-title">
		Item label
		<span class="dp-po-Icon Icon--tick Icon--success"></span>
	</span>
</form>

<h4>log-in</h4>
<h4>Version 1</h4>
<form class="dp-po-Forms Forms--login">
	<input type="email" name="" placeholder="Email">
	<input type="password" name="" placeholder="Type your password">
	<span class="dp-po-CustomCheckbox">
		<input type="checkbox" class="dp-po-ControlInput" id="loginCheckbox-01"></input>
		<label for="loginCheckbox-01">Text</label>
	</span>
	<button class="dp-po-Button Button--large">Log in</button>
	<a href="" class="dp-po-description">Need a password reminder?</a>
</form>

<h4>Version 2</h4>
<form class="dp-po-Forms Forms--login">
	<span class="Forms--item-login">
		<input type="" name="" placeholder="">
		<span class="dp-po-login-title">Placeholder Text</span>
	</span>
	<span class="Forms--item-login">
		<input type="" name="" placeholder="">
		<span class="dp-po-login-title">Password</span>
	</span>
	<span class="dp-po-CustomCheckbox">
		<input type="checkbox" class="dp-po-ControlInput" id="DemoCheckbox-01"></input>
		<label for="DemoCheckbox-01">Text</label>
	</span>
	<button class="dp-po-Button Button--large">User input</button>
	<a href="" class="dp-po-description">Password</a>
</form>

<h4>checkbox-text/medium</h4>

<h4>Static</h4>
<span class="dp-po-CustomCheckbox CustomCheckbox--medium">
    <input type="checkbox" class="dp-po-ControlInput" id="DemoMediumCheckbox-03"></input>
    <label for="DemoMediumCheckbox-03">Text</label>
    <span class="dp-po-Checkbox-description">only</span>
</span>

<h4>Success</h4>
<span class="dp-po-CustomCheckbox CustomCheckbox--medium">
    <input type="checkbox" class="dp-po-ControlInput" id="DemoMediumCheckbox-04" checked></input>
    <label for="DemoMediumCheckbox-04">Text</label>
    <span class="dp-po-Checkbox-description">only</span>
</span>

<h4>Hover</h4>
<span class="dp-po-CustomCheckbox CustomCheckbox--medium is-hover">
    <input type="checkbox" class="dp-po-ControlInput" id="DemoMediumCheckbox-05"></input>
    <label for="DemoMediumCheckbox-05">Text</label>
    <span class="dp-po-Checkbox-description">only</span>
</span>

<h4>checkbox-text/small</h4>

<h4>Static</h4>
<span class="dp-po-CustomCheckbox">
    <input type="checkbox" class="dp-po-ControlInput" id="DemoSmallCheckbox-01"></input>
    <label for="DemoSmallCheckbox-01">Text</label>
</span>

<h4>Success</h4>
<span class="dp-po-CustomCheckbox">
    <input type="checkbox" class="dp-po-ControlInput" id="DemoSmallCheckbox-02" checked></input>
    <label for="DemoSmallCheckbox-02">Text</label>
</span>

<h4>button/radio</h4>
<form action="#" class="dp-po-RadioWrapper">
	<h4>Static</h4>
	<div class="dp-po-RadioItem">
		<input type="radio" id="test1" name="radio-group">
		<label for="test1">text</label>
	</div>
	<h4>Selected</h4>
	<div class="dp-po-RadioItem">
		<input type="radio" id="test2" name="radio-group" checked>
		<label for="test2">text</label>
	</div>
</form>

<h4>upload-item</h4>

<h4>Static</h4>

<form class="dp-po-Upload">
	<span class="dp-po-Upload-item dp-po-Choose-btn">
		<label for="file-upload">
		<span class="dp-po-Icon Icon--file Icon--grey-dark"></span>
			Choose a file
		</label>
		<input id="file-upload" type="file"/>
	</span>
	or
	<span class="dp-po-Upload-item dp-po-Dragdrop-btn">
		<span class="dp-po-Icon Icon--dragdrop"></span>
		Drag and drop
	</span>
</form>

<h4>Uploaded</h4>

<form class="dp-po-Upload is-uploaded">
	<span class="dp-po-Upload-wrapper">
		<span class="dp-po-Upload-item dp-po-Choose-btn">
			<label for="file-upload">
				<span class="dp-po-Icon Icon--file Icon--grey-dark"></span>
				Choose a file
			</label>
			<input id="file-upload" type="file"/>
		</span>
		or
		<span class="dp-po-Upload-item dp-po-Dragdrop-btn">
			<span class="dp-po-Icon Icon--dragdrop"></span>
			Drag and drop
		</span>
	</span>
	<!-- uploaded -->
	<span class="dp-po-Upload-item">
		<span class="dp-po-Avatar">
			<img class="dp-po-Avatar-icon" src="../../img/docs/avatar.png" alt="">
			<span class="dp-po-Icon Icon--edit Icon--primary"></span>
		</span>
		<span class="dp-po-Upload-item dp-po-Choose-btn">
			<label for="file-upload">
				<span class="dp-po-Icon Icon--file Icon--grey-dark"></span>
				myprofilepic.jpg
			</label>
			<input id="file-upload" type="file"/>
		</span>
	</span>
</form>

<h4>captcha</h4>

<form class="dp-po-captcha">
	<input type="" name="" placeholder="">
	<span class="dp-po-Icon Icon--refresh Icon--primary"></span>
	<input type="" name="" placeholder="Placeholder Text">
</form>

<h4>item</h4>

<h4>comment-history</h4>

<form class="dp-po-list flagged--item">
	<span class="dp-po-subtitle">
		<span class="dp-po-username">
			<span class="dp-po-Icon Icon--medium-avatar"></span>
			User name <a href="mailto:demo-user@example.com" class="dp-po-email"> (demo-user@example.com)</a>
		</span>
		<span class="dp-po-label label--time-box">
			<span class="dp-po-Icon Icon--history Icon--primary"></span>
			00 days
		</span>
	</span>
	<input type="" name="" placeholder="Your comment">
</form>

<h4>user-comment</h4>

<form class="dp-po-list flagged--item">
	<span class="dp-po-subtitle">
		<span class="dp-po-username">
			<span class="dp-po-Icon Icon--medium-avatar"></span>
			Name Surname
		</span>
	</span>
	<span class="dp-po-Forms dp-po-Textarea">
		<textarea name="text" placeholder="Your comment"></textarea>
	</span>
</form>



