# web前端开发面试题： web全栈开发面试题


cnblogs xgqfrms 

```html
<meta http-equiv="refresh" content="7; url=/DataStructure/html5/index.html">
<script>
    window.onload = (() => {
        // alert("After 7s, auto goto => http://javascript.xgqfrms.xyz/ ");
        let n;
        let count = (n = 7) => {
            alert(`After ${n}s, auto goto => http://javascript.xgqfrms.xyz/ `);
        }
        setTimeout(count(), 1000);
    });
</script>
```