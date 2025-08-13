<template>
    <a :href="data.link" class="c-news-item">
        <div class="item-title">
            {{ data.title }}
        </div>
        <div class="item-date">
            {{ data.date }}
        </div>
    </a>
</template>


<script>
export default {
  name: "NewsItem",
  props: {
    data: {
      type: Object,
      required: true
    },
  }
};
</script>