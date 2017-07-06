var gulp=require('gulp');


gulp.task("copy-images",function(){
	gulp.src("images/**/*")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu/images"));//这里改成你php里www的文件夹位置，下面也是
});
gulp.task("copy-image",function(){
	gulp.src("image/**/*")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu/image"));//这里改成你php里www的文件夹位置，下面也是
});
gulp.task("copy-html",function(){
	gulp.src("html/**/*")
	.pipe(gulp.Eest("E:/PhP/WWW/xiangmu/html"));
});
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu/css"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu/js"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu/php"));
});
gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("E:/PhP/WWW/xiangmu"));
});

gulp.task("watch",function(){
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("images/**/*",["copy-images"]);
	gulp.watch("image/**/*",["copy-image"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("html/**/*",["copy-html"]);
	gulp.watch("index",["copy-index"]);	
});
