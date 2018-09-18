function setCanvas(canvas, ctx, dpr, obj, bgColor) {
    var size = dpr || 1;
    canvas.width = (obj.w || 300) * dpr;
    canvas.height = (obj.h || 150) * dpr;
    canvas.style.width = (obj.w || 300)+ 'px';
    canvas.style.height = (obj.h || 150) + 'px';
    canvas.style.background = bgColor || '#000';
    ctx.scale(size, size);
}