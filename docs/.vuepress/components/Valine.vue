<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'uxUtX5A8DNdewKykNQtoJN0A-gzGzoHsz',// your appId
      appKey: 'TymI8qQrFv8Boz4F5HxOskLE', // your appKey
      notify:true, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  },
}
</script>

