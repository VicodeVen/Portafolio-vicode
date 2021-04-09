    class Bezel {
        static get inputProperties() {
            return ['--bezel-color', 'bezel-width']
        };

        static get inputArguments() {

        };

        static get contextOptions() {

        };

        paint(ctx,geom,properties,args) {
        
            ctx.lineWidth = properties.get('--bezel-width');
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = properties.get('--bezel-color');
            const inset = ctx.lineWidth + 1;
            const radius = [18,15,18,15],
            topLeftRadius = radius[0],
            topRightRadius = radius[1],
            bottomRightRadius = radius[2],
            bottomLeftRadius = radius[3];
    
            const width = geom.width;
            const height =geom.height;
    
            ctx.lineTo(topLeftRadius,inset);
            ctx.lineTo(width - topRightRadius, inset);
            ctx.lineTo(width - inset, topRightRadius);
            ctx.lineTo(width - inset, height - bottomRightRadius);
            ctx.lineTo(width - bottomRightRadius, height - inset);
            ctx.lineTo(bottomLeftRadius, height - inset);
            ctx.lineTo(inset, height - bottomLeftRadius);
            ctx.lineTo(inset, topLeftRadius);
            ctx.closePath();
            ctx.stroke();
        }
    }
    registerPaint('button',Bezel);