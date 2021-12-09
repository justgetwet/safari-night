---
layout: post
title: "投稿記事のレイアウト"
render_with_liquid: false
---

### post.html

ｍｋｍ

```html
---
layout: default
---
<main>
  <article>
    <h2>{{ page.title }}</h2>
    <div>
        {{ content }}
    </div>
  </article>
</main> 
```

### index.md

nkmk

```markdown
---
layout: default
title: "Top Page"
---

<main>
  {% for post in site.posts %}
    <aside>
      <h3>
        <span>{{ post.date | date: "%b %d, %y"}}</span>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </h3>
    </aside>  
  {% endfor %}
</main>
```

### forst post

mkk

```markdown
---
layout: post
title: "First post"
---

## You're ready to go!

Start developing your Jekyll website.
```

![first post](../../../../safari-night/images/first-post.jpg)

viewww

![first post view](../../../../safari-night/images/first-post-preview.jpg)