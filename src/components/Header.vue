<template>
  <div class="header-wrapper">
    <div class="share-buttons__wrapper">

      <div
        class="fb-like share-button"
        data-href="http://altmetromap.com"
        data-send="true"
        data-layout="button_count"
        data-width="450"
        data-show-faces="true"/>

      <div id="vk_like"/>

      <a
        href="https://twitter.com/share"
        class="twitter-share-button share-button"
        data-url="http://altmetromap.com"
        data-text="Alternative metro map. Try to read it loud! It's awesome!">Tweet</a>
    </div>

    <h1>Alternative Metro Maps</h1>
    <h3>Usage</h3>
    <p>
      Try reading it&nbsp;out loud and there will be&nbsp;real russian names of&nbsp;the&nbsp;subway stations.
      <br>To&nbsp;read that map correctly you need to&nbsp;speak fast,
      but don&rsquo;t forget to stress letters with accents.
      <br >Hover your mouse over the station to&nbsp;hear pronunciation.
      <br >Sorry, Moscow map is&nbsp;not&nbsp;up&nbsp;to&nbsp;date, but most&nbsp;of&nbsp;the stations are&nbsp;here.
    </p>
  </div>
</template>

<script>
</script>

<style>
.header-wrapper {
    margin-top: 12px;
}

.share-buttons__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 480px;
    margin: 0 auto;
}

.share-button {
    margin-right: 36px;
    margin-bottom: 12px;
}

</style>
