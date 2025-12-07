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
<img src="{{ site.baseurl }}assets/hiking/hiking_1.JPEG" class="zoom_img" id="hiking_img">
<div class="gallery_caption_list">
    <div id="caption_location">Great Falls, MD</div>
    <div id="caption_date">December, 2019</div>
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
    <div class="project_column"><div id="cont_col1" class="project_container"><img id="img_col1" class="gallery_img"/></div></div>
    <div class="project_column"><div id="cont_col2" class="project_container"><img id="img_col2" class="gallery_img"/></div></div>
    <div class="project_column"><div id="cont_col3" class="project_container"><img id="img_col3" class="gallery_img"/></div></div>
    </div>
</template>

<div id="texHolder">
</div>

<div id="rowHolder">
</div>

<!--
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 1); "><img src="{{ site.baseurl }}assets/hiking/hiking_1.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 2); "><img src="{{ site.baseurl }}assets/hiking/hiking_2.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 3); "><img src="{{ site.baseurl }}assets/hiking/hiking_3.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 4); "><img src="{{ site.baseurl }}assets/hiking/hiking_4.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 5); "><img src="{{ site.baseurl }}assets/hiking/hiking_5.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 6); "><img src="{{ site.baseurl }}assets/hiking/hiking_6.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 7); "><img src="{{ site.baseurl }}assets/hiking/hiking_7.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 8); "><img src="{{ site.baseurl }}assets/hiking/hiking_8.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 9); "><img src="{{ site.baseurl }}assets/hiking/hiking_9.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 10); "><img src="{{ site.baseurl }}assets/hiking/hiking_10.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 11); "><img src="{{ site.baseurl }}assets/hiking/hiking_11.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 12); "><img src="{{ site.baseurl }}assets/hiking/hiking_12.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 13); "><img src="{{ site.baseurl }}assets/hiking/hiking_13.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 14); "><img src="{{ site.baseurl }}assets/hiking/hiking_14.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 15); "><img src="{{ site.baseurl }}assets/hiking/hiking_15.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 16); "><img src="{{ site.baseurl }}assets/hiking/hiking_16.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 17); "><img src="{{ site.baseurl }}assets/hiking/hiking_17.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 18); "><img src="{{ site.baseurl }}assets/hiking/hiking_18.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 19); "><img src="{{ site.baseurl }}assets/hiking/hiking_19.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 20); "><img src="{{ site.baseurl }}assets/hiking/hiking_20.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 21); "><img src="{{ site.baseurl }}assets/hiking/hiking_21.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 22); "><img src="{{ site.baseurl }}assets/hiking/hiking_22.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 23); "><img src="{{ site.baseurl }}assets/hiking/hiking_23.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 24); "><img src="{{ site.baseurl }}assets/hiking/hiking_24.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 25); "><img src="{{ site.baseurl }}assets/hiking/hiking_25.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 26); "><img src="{{ site.baseurl }}assets/hiking/hiking_26.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 27); "><img src="{{ site.baseurl }}assets/hiking/hiking_27.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 28); "><img src="{{ site.baseurl }}assets/hiking/hiking_28.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 29); "><img src="{{ site.baseurl }}assets/hiking/hiking_29.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 30); "><img src="{{ site.baseurl }}assets/hiking/hiking_30.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 31); "><img src="{{ site.baseurl }}assets/hiking/hiking_31.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 32); "><img src="{{ site.baseurl }}assets/hiking/hiking_32.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 33); "><img src="{{ site.baseurl }}assets/hiking/hiking_33.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 34); "><img src="{{ site.baseurl }}assets/hiking/hiking_34.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 35); "><img src="{{ site.baseurl }}assets/hiking/hiking_35.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 36); "><img src="{{ site.baseurl }}assets/hiking/hiking_36.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 37); "><img src="{{ site.baseurl }}assets/hiking/hiking_37.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 38); "><img src="{{ site.baseurl }}assets/hiking/hiking_38.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 39); "><img src="{{ site.baseurl }}assets/hiking/hiking_39.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 40); "><img src="{{ site.baseurl }}assets/hiking/hiking_40.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 41); "><img src="{{ site.baseurl }}assets/hiking/hiking_41.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 42); "><img src="{{ site.baseurl }}assets/hiking/hiking_42.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 43); "><img src="{{ site.baseurl }}assets/hiking/hiking_43.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 44); "><img src="{{ site.baseurl }}assets/hiking/hiking_44.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 45); "><img src="{{ site.baseurl }}assets/hiking/hiking_45.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 46); "><img src="{{ site.baseurl }}assets/hiking/hiking_46.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 47); "><img src="{{ site.baseurl }}assets/hiking/hiking_47.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 48); "><img src="{{ site.baseurl }}assets/hiking/hiking_48.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 49); "><img src="{{ site.baseurl }}assets/hiking/hiking_49.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 50); "><img src="{{ site.baseurl }}assets/hiking/hiking_50.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 51); "><img src="{{ site.baseurl }}assets/hiking/hiking_51.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 52); "><img src="{{ site.baseurl }}assets/hiking/hiking_52.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 53); "><img src="{{ site.baseurl }}assets/hiking/hiking_53.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 54); "><img src="{{ site.baseurl }}assets/hiking/hiking_54.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 55); "><img src="{{ site.baseurl }}assets/hiking/hiking_55.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 56); "><img src="{{ site.baseurl }}assets/hiking/hiking_56.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 57); "><img src="{{ site.baseurl }}assets/hiking/hiking_57.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 58); "><img src="{{ site.baseurl }}assets/hiking/hiking_58.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 59); "><img src="{{ site.baseurl }}assets/hiking/hiking_59.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 60); "><img src="{{ site.baseurl }}assets/hiking/hiking_60.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 61); "><img src="{{ site.baseurl }}assets/hiking/hiking_61.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 62); "><img src="{{ site.baseurl }}assets/hiking/hiking_62.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 63); "><img src="{{ site.baseurl }}assets/hiking/hiking_63.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 64); "><img src="{{ site.baseurl }}assets/hiking/hiking_64.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 65); "><img src="{{ site.baseurl }}assets/hiking/hiking_65.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 66); "><img src="{{ site.baseurl }}assets/hiking/hiking_66.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 67); "><img src="{{ site.baseurl }}assets/hiking/hiking_67.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 68); "><img src="{{ site.baseurl }}assets/hiking/hiking_68.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 69); "><img src="{{ site.baseurl }}assets/hiking/hiking_69.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 70); "><img src="{{ site.baseurl }}assets/hiking/hiking_70.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 71); "><img src="{{ site.baseurl }}assets/hiking/hiking_71.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 72); "><img src="{{ site.baseurl }}assets/hiking/hiking_72.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 73); "><img src="{{ site.baseurl }}assets/hiking/hiking_73.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 74); "><img src="{{ site.baseurl }}assets/hiking/hiking_74.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 75); "><img src="{{ site.baseurl }}assets/hiking/hiking_75.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 76); "><img src="{{ site.baseurl }}assets/hiking/hiking_76.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 77); "><img src="{{ site.baseurl }}assets/hiking/hiking_77.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 78); "><img src="{{ site.baseurl }}assets/hiking/hiking_78.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 79); "><img src="{{ site.baseurl }}assets/hiking/hiking_79.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 80); "><img src="{{ site.baseurl }}assets/hiking/hiking_80.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 81); "><img src="{{ site.baseurl }}assets/hiking/hiking_81.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 82); "><img src="{{ site.baseurl }}assets/hiking/hiking_82.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 83); "><img src="{{ site.baseurl }}assets/hiking/hiking_83.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 84); "><img src="{{ site.baseurl }}assets/hiking/hiking_84.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 85); "><img src="{{ site.baseurl }}assets/hiking/hiking_85.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 86); "><img src="{{ site.baseurl }}assets/hiking/hiking_86.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 87); "><img src="{{ site.baseurl }}assets/hiking/hiking_87.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 88); "><img src="{{ site.baseurl }}assets/hiking/hiking_88.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 89); "><img src="{{ site.baseurl }}assets/hiking/hiking_89.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 90); "><img src="{{ site.baseurl }}assets/hiking/hiking_90.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 91); "><img src="{{ site.baseurl }}assets/hiking/hiking_91.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 92); "><img src="{{ site.baseurl }}assets/hiking/hiking_92.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 93); "><img src="{{ site.baseurl }}assets/hiking/hiking_93.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 94); "><img src="{{ site.baseurl }}assets/hiking/hiking_94.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 95); "><img src="{{ site.baseurl }}assets/hiking/hiking_95.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 96); "><img src="{{ site.baseurl }}assets/hiking/hiking_96.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 97); "><img src="{{ site.baseurl }}assets/hiking/hiking_97.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 98); "><img src="{{ site.baseurl }}assets/hiking/hiking_98.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 99); "><img src="{{ site.baseurl }}assets/hiking/hiking_99.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 100); "><img src="{{ site.baseurl }}assets/hiking/hiking_100.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 101); "><img src="{{ site.baseurl }}assets/hiking/hiking_101.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 102); "><img src="{{ site.baseurl }}assets/hiking/hiking_102.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 103); "><img src="{{ site.baseurl }}assets/hiking/hiking_103.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 104); "><img src="{{ site.baseurl }}assets/hiking/hiking_104.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 105); "><img src="{{ site.baseurl }}assets/hiking/hiking_105.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 106); "><img src="{{ site.baseurl }}assets/hiking/hiking_106.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 107); "><img src="{{ site.baseurl }}assets/hiking/hiking_107.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 108); "><img src="{{ site.baseurl }}assets/hiking/hiking_108.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 109); "><img src="{{ site.baseurl }}assets/hiking/hiking_109.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 110); "><img src="{{ site.baseurl }}assets/hiking/hiking_110.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 111); "><img src="{{ site.baseurl }}assets/hiking/hiking_111.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 112); "><img src="{{ site.baseurl }}assets/hiking/hiking_112.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 113); "><img src="{{ site.baseurl }}assets/hiking/hiking_113.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 114); "><img src="{{ site.baseurl }}assets/hiking/hiking_114.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 115); "><img src="{{ site.baseurl }}assets/hiking/hiking_115.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 116); "><img src="{{ site.baseurl }}assets/hiking/hiking_116.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 117); "><img src="{{ site.baseurl }}assets/hiking/hiking_117.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 118); "><img src="{{ site.baseurl }}assets/hiking/hiking_118.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 119); "><img src="{{ site.baseurl }}assets/hiking/hiking_119.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 120); "><img src="{{ site.baseurl }}assets/hiking/hiking_120.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 121); "><img src="{{ site.baseurl }}assets/hiking/hiking_121.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 122); "><img src="{{ site.baseurl }}assets/hiking/hiking_122.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 123); "><img src="{{ site.baseurl }}assets/hiking/hiking_123.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 124); "><img src="{{ site.baseurl }}assets/hiking/hiking_124.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 125); "><img src="{{ site.baseurl }}assets/hiking/hiking_125.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 126); "><img src="{{ site.baseurl }}assets/hiking/hiking_126.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 127); "><img src="{{ site.baseurl }}assets/hiking/hiking_127.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 128); "><img src="{{ site.baseurl }}assets/hiking/hiking_128.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 129); "><img src="{{ site.baseurl }}assets/hiking/hiking_129.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 130); "><img src="{{ site.baseurl }}assets/hiking/hiking_130.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 131); "><img src="{{ site.baseurl }}assets/hiking/hiking_131.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 132); "><img src="{{ site.baseurl }}assets/hiking/hiking_132.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 133); "><img src="{{ site.baseurl }}assets/hiking/hiking_133.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 134); "><img src="{{ site.baseurl }}assets/hiking/hiking_134.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 135); "><img src="{{ site.baseurl }}assets/hiking/hiking_135.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 136); "><img src="{{ site.baseurl }}assets/hiking/hiking_136.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 137); "><img src="{{ site.baseurl }}assets/hiking/hiking_137.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 138); "><img src="{{ site.baseurl }}assets/hiking/hiking_138.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 139); "><img src="{{ site.baseurl }}assets/hiking/hiking_139.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 140); "><img src="{{ site.baseurl }}assets/hiking/hiking_140.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 141); "><img src="{{ site.baseurl }}assets/hiking/hiking_141.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 142); "><img src="{{ site.baseurl }}assets/hiking/hiking_142.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 143); "><img src="{{ site.baseurl }}assets/hiking/hiking_143.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 144); "><img src="{{ site.baseurl }}assets/hiking/hiking_144.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 145); "><img src="{{ site.baseurl }}assets/hiking/hiking_145.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 146); "><img src="{{ site.baseurl }}assets/hiking/hiking_146.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 147); "><img src="{{ site.baseurl }}assets/hiking/hiking_147.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 148); "><img src="{{ site.baseurl }}assets/hiking/hiking_148.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 149); "><img src="{{ site.baseurl }}assets/hiking/hiking_149.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 150); "><img src="{{ site.baseurl }}assets/hiking/hiking_150.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 151); "><img src="{{ site.baseurl }}assets/hiking/hiking_151.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 152); "><img src="{{ site.baseurl }}assets/hiking/hiking_152.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 153); "><img src="{{ site.baseurl }}assets/hiking/hiking_153.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 154); "><img src="{{ site.baseurl }}assets/hiking/hiking_154.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 155); "><img src="{{ site.baseurl }}assets/hiking/hiking_155.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 156); "><img src="{{ site.baseurl }}assets/hiking/hiking_156.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 157); "><img src="{{ site.baseurl }}assets/hiking/hiking_157.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 158); "><img src="{{ site.baseurl }}assets/hiking/hiking_158.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 159); "><img src="{{ site.baseurl }}assets/hiking/hiking_159.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 160); "><img src="{{ site.baseurl }}assets/hiking/hiking_160.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 161); "><img src="{{ site.baseurl }}assets/hiking/hiking_161.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 162); "><img src="{{ site.baseurl }}assets/hiking/hiking_162.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 163); "><img src="{{ site.baseurl }}assets/hiking/hiking_163.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 164); "><img src="{{ site.baseurl }}assets/hiking/hiking_164.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 165); "><img src="{{ site.baseurl }}assets/hiking/hiking_165.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 166); "><img src="{{ site.baseurl }}assets/hiking/hiking_166.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 167); "><img src="{{ site.baseurl }}assets/hiking/hiking_167.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 168); "><img src="{{ site.baseurl }}assets/hiking/hiking_168.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 169); "><img src="{{ site.baseurl }}assets/hiking/hiking_169.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 170); "><img src="{{ site.baseurl }}assets/hiking/hiking_170.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 171); "><img src="{{ site.baseurl }}assets/hiking/hiking_171.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 172); "><img src="{{ site.baseurl }}assets/hiking/hiking_172.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 173); "><img src="{{ site.baseurl }}assets/hiking/hiking_173.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 174); "><img src="{{ site.baseurl }}assets/hiking/hiking_174.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 175); "><img src="{{ site.baseurl }}assets/hiking/hiking_175.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 176); "><img src="{{ site.baseurl }}assets/hiking/hiking_176.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 177); "><img src="{{ site.baseurl }}assets/hiking/hiking_177.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 178); "><img src="{{ site.baseurl }}assets/hiking/hiking_178.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 179); "><img src="{{ site.baseurl }}assets/hiking/hiking_179.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 180); "><img src="{{ site.baseurl }}assets/hiking/hiking_180.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 181); "><img src="{{ site.baseurl }}assets/hiking/hiking_181.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 182); "><img src="{{ site.baseurl }}assets/hiking/hiking_182.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 183); "><img src="{{ site.baseurl }}assets/hiking/hiking_183.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 184); "><img src="{{ site.baseurl }}assets/hiking/hiking_184.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 185); "><img src="{{ site.baseurl }}assets/hiking/hiking_185.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 186); "><img src="{{ site.baseurl }}assets/hiking/hiking_186.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 187); "><img src="{{ site.baseurl }}assets/hiking/hiking_187.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 188); "><img src="{{ site.baseurl }}assets/hiking/hiking_188.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 189); "><img src="{{ site.baseurl }}assets/hiking/hiking_189.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 190); "><img src="{{ site.baseurl }}assets/hiking/hiking_190.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 191); "><img src="{{ site.baseurl }}assets/hiking/hiking_191.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 192); "><img src="{{ site.baseurl }}assets/hiking/hiking_192.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 193); "><img src="{{ site.baseurl }}assets/hiking/hiking_193.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 194); "><img src="{{ site.baseurl }}assets/hiking/hiking_194.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 195); "><img src="{{ site.baseurl }}assets/hiking/hiking_195.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 196); "><img src="{{ site.baseurl }}assets/hiking/hiking_196.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 197); "><img src="{{ site.baseurl }}assets/hiking/hiking_197.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 198); "><img src="{{ site.baseurl }}assets/hiking/hiking_198.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 199); "><img src="{{ site.baseurl }}assets/hiking/hiking_199.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 200); "><img src="{{ site.baseurl }}assets/hiking/hiking_200.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 201); "><img src="{{ site.baseurl }}assets/hiking/hiking_201.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 202); "><img src="{{ site.baseurl }}assets/hiking/hiking_202.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 203); "><img src="{{ site.baseurl }}assets/hiking/hiking_203.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 204); "><img src="{{ site.baseurl }}assets/hiking/hiking_204.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 205); "><img src="{{ site.baseurl }}assets/hiking/hiking_205.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 206); "><img src="{{ site.baseurl }}assets/hiking/hiking_206.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 207); "><img src="{{ site.baseurl }}assets/hiking/hiking_207.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 208); "><img src="{{ site.baseurl }}assets/hiking/hiking_208.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 209); "><img src="{{ site.baseurl }}assets/hiking/hiking_209.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 210); "><img src="{{ site.baseurl }}assets/hiking/hiking_210.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 211); "><img src="{{ site.baseurl }}assets/hiking/hiking_211.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 212); "><img src="{{ site.baseurl }}assets/hiking/hiking_212.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 213); "><img src="{{ site.baseurl }}assets/hiking/hiking_213.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 214); "><img src="{{ site.baseurl }}assets/hiking/hiking_214.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 215); "><img src="{{ site.baseurl }}assets/hiking/hiking_215.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 216); "><img src="{{ site.baseurl }}assets/hiking/hiking_216.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 217); "><img src="{{ site.baseurl }}assets/hiking/hiking_217.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 218); "><img src="{{ site.baseurl }}assets/hiking/hiking_218.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 219); "><img src="{{ site.baseurl }}assets/hiking/hiking_219.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 220); "><img src="{{ site.baseurl }}assets/hiking/hiking_220.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 221); "><img src="{{ site.baseurl }}assets/hiking/hiking_221.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 222); "><img src="{{ site.baseurl }}assets/hiking/hiking_222.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 223); "><img src="{{ site.baseurl }}assets/hiking/hiking_223.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 224); "><img src="{{ site.baseurl }}assets/hiking/hiking_224.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 225); "><img src="{{ site.baseurl }}assets/hiking/hiking_225.JPEG" class="gallery_img"/></div></div>
</div>
<div class="project_row">
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 226); "><img src="{{ site.baseurl }}assets/hiking/hiking_226.JPEG" class="gallery_img"/></div></div>
<div class="project_column"><div class="project_container" onclick="showHiking(event, 'gallery_template', 227); "><img src="{{ site.baseurl }}assets/hiking/hiking_227.JPEG" class="gallery_img"/></div></div>
</div>-->