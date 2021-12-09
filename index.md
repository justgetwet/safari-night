---
layout: default
title: "Top Page"
---

<main>
  <h3 class="tag">Posts</h3>
  {% for post in site.posts %}
    <aside>
      <h3>
        <div class="post-items">
          <div class="date">{{ post.date | date: "%b %d, %y"}}</div>
          <div class="title">
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </div>
        </div>
      </h3>
    </aside>  
  {% endfor %}
</main>
