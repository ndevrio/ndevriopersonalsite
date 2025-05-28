<!-- ---
layout: page
title: 
--- -->

<div class="post">
  <h1 class="post-title">Using NFC pins as GPIO on Seeeduino XIAO boards</h1>
  <span class="post-date">May 28, 2025</span>
</div>



Seeeduino's XIAO microcontroller boards are amazing for their small size and ample documentation. However, being so small, you may find yourself wishing you had just a few extra pins to use for input and output. This is where I found myself.

So far, I have primarily used the Arduino IDE to program and interface with these boards. After doing some digging in the `variants.txt` configuration file installed by the IDE when setting up a XIAO board, I was interested to discover there are additional pins available.

<div class="related">
  <h2>Related Posts</h2>
  <ul class="related-posts">
    {% for post in site.related_posts limit:3 %}
      <li>
        <h3>
          <a href="{{ post.url }}">
            {{ post.title }}
            <small>{{ post.date | date_to_string }}</small>
          </a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>
