---
layout: default
title: Gallery
---

<div>
  <h1 id="hiking_top">Hiking photo gallery</h1>
</div>

<template id='gallery_template'><div class="tex_background"><div id="texBoxClick" class="gallery_border">
<div class="x_top">
    <img src="{{ site.baseurl }}assets/xbox.png" class="gallery_xbox" onclick="removeTex()">
</div>
<img src="{{ site.baseurl }}assets/hiking/hiking_1.jpg" class="zoom_img" id="hiking_img">
<div class="gallery_caption_list">
    <div id="caption_location"></div>
    <div id="caption_date"></div>
</div>
<div class="gallery_img_list">
    <div id="suppGallery" class="supplement" onclick="advanceHikingImage(1);">
        <!-- <img src="{{ site.baseurl }}assets/xbox.png" class="gallery_icon"> -->
        <div class="suppImgBase">
            <img src="{{ site.baseurl }}assets/left_arrow.png" class="gallery_icon">
        </div>
        <div class="suppImgHover">
            <img src="{{ site.baseurl }}assets/left_arrow_w.png" class="gallery_icon">
        </div>
    </div>
    <div id="suppGallery" class="supplement" onclick="advanceHikingImage(-1);">
        <!-- <img src="{{ site.baseurl }}assets/xbox.png" class="gallery_icon"> -->
        <div class="suppImgBase">
            <img src="{{ site.baseurl }}assets/right_arrow.png" class="gallery_icon">
        </div>
        <div class="suppImgHover">
            <img src="{{ site.baseurl }}assets/right_arrow_w.png" class="gallery_icon">
        </div>
    </div>
</div>
</div></div></template>

<template id='row_template'>
    <div class="project_row">
    <div class="project_column"><div id="cont_col1" class="project_container"><img id="img_col1" loading="lazy" class="gallery_img"/></div></div>
    <div class="project_column"><div id="cont_col2" class="project_container"><img id="img_col2" loading="lazy" class="gallery_img"/></div></div>
    <div class="project_column"><div id="cont_col3" class="project_container"><img id="img_col3" loading="lazy" class="gallery_img"/></div></div>
    </div>
</template>

<div id="texHolder">
</div>

<div id="rowHolder">
</div>