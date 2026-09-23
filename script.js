document.querySelectorAll('.view-all').forEach(btn=>{
  btn.addEventListener('click',()=>alert('Catalog page coming next.'));
});

document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.nav-item').forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
  });
});
