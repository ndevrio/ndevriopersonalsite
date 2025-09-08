<!-- ---
layout: page
title: 
--- -->

<div>
  <h1>Hiking photo gallery</h1>
</div>

<template id="gallery_template"><div class="tex_background"><div id="texBoxClick" class="gallery_border">
<div class="x_top">
    <img src="{{ site.baseurl }}assets/xbox.png" class="gallery_xbox" onclick="removeTex()">
</div>
<img src="{{ site.baseurl }}assets/hiking/hiking_1.JPEG" class="zoom_img" id="hiking_img">
<div class="gallery_caption_list">
    <div>Great Falls, MD</div>
    <div>December, 2019</div>
</div>
<div class="gallery_img_list">
    <div id="suppGallery" class="supplement" onclick="advanceHikingImage(-1);">
        <!-- <img src="{{ site.baseurl }}assets/xbox.png" class="gallery_icon"> -->
        <div class="suppImgBase">
            <img src="{{ site.baseurl }}assets/left_arrow.png" class="gallery_icon">
        </div>
        <div class="suppImgHover">
            <img src="{{ site.baseurl }}assets/left_arrow_w.png" class="gallery_icon">
        </div>
    </div>
    <div id="suppGallery" class="supplement" onclick="advanceHikingImage(1);">
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

<div id="texHolder">
</div>

<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 1); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_1.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 2); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_2.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_3.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 4); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_4.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 5); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_5.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 6); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_6.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 7); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_7.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 8); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_8.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 9); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_9.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 10); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_10.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 11); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_11.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 12); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_12.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 13); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_13.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 14); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_14.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 15); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_15.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 16); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_16.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 17); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_17.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 18); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_18.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 19); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_19.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 20); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_20.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 21); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_21.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_22.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_23.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_24.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_25.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_26.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_27.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_28.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_29.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_30.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_31.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_32.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_33.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_34.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_35.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_36.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_37.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_38.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_39.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_40.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_41.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_42.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_43.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_44.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_45.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_46.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_47.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_48.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_49.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_50.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_51.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_52.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_53.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_54.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_55.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_56.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_57.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_58.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_59.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_60.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_61.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_62.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_63.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_64.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_65.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_66.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_67.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_68.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_69.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 
<div class="project_row">
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_70.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_71.JPEG" class="gallery_img"/>
        </div>
    </div>
    <div class="project_column">
        <div class="project_container" onclick="showHiking(event, 'gallery_template', 3); ">
            <img src="{{ site.baseurl }}assets/hiking/hiking_72.JPEG" class="gallery_img"/>
        </div>
    </div>
</div> 