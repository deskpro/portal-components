---
id: dp-po-Pagination
title: Pagination
sidebar_label: Pagination
---

<h4>Listview/pagination-firstpage</h4>

<div class="demo-pagination">
    <div class="demo-pagination-title">item/static</div>
    <div class="dp-po-Pagination-container">
        <ul class="dp-po-Pagination">
            <li><a href="#" class="dp-po-PageNumber">1</a></li>
        </ul>
    </div>
</div>

<div class="demo-pagination">
    <div class="demo-pagination-title">item/selected</div>
    <div class="dp-po-Pagination-container">
        <ul class="dp-po-Pagination">
            <li><a href="#" class="dp-po-PageNumber is-active">1</a></li>
        </ul>
    </div>
</div>

<div class="demo-pagination">
    <div class="demo-pagination-title">item/inactive</div>
    <div class="dp-po-Pagination-container">
        <ul class="dp-po-Pagination">
            <li><a href="#" class="dp-po-PageNumber is-disabled">1</a></li>
        </ul>
    </div>
</div>

<div class="demo-pagination">
    <div class="demo-pagination-title">item/inactive</div>
    <div class="dp-po-Pagination-container">
        <ul class="dp-po-Pagination">
            <li><a href="#" class="dp-po-PaginationArrows"><span class="dp-po-arrow arrow--left"></span></a>
            <li><a href="#" class="dp-po-PageNumber is-active">1</a></li>
            <li><a href="#" class="dp-po-PageNumber">2</a></li>
            <li><a href="#" class="dp-po-PageNumber">3</a></li>
            <li><a href="#" class="dp-po-PageNumber">4</a></li>
            <li><a href="#" class="dp-po-PageNumber">5</a></li>
            <li><a href="#" class="dp-po-PageNumber">6</a></li>
            <li><a href="#" class="dp-po-PageNumber">7</a></li>
            <li><span class="dp-po-BreakPagination">...</span></li>
            <li><a href="#" class="dp-po-PageNumber">75</a></li>
            <li><a href="#" class="dp-po-PaginationArrows"><span class="dp-po-arrow"></span></a></li>
        </ul>
        <span class="dp-po-PageJump">
            <label class="dp-po-PageJump-label">
                Go to page
                <input type="number" min="1" max="75" class="dp-Input dp-po-PageJump-page" value="" />
            </label>
            <button type="button" class="dp-po-Button Button--small dp-po-PageJump-button">Go</button>
        </span>
    </div>
</div>