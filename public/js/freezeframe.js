class FreezeImages {
    constructor(options = {}) {
        // Set default params
        this.selector = options.selector || "freeze";
        this.imgCls = "ff-img";
        this.canvasCls = "ff-canvas";
        this.hover = (options.hover === true || options.hover === "true") ? true : false;
        this.smoothing = (options.smoothing === false) ? false : true;

        // Finds all images with selector class and within elements with the selected class and creates list
        const imgList = $(`img.${this.selector}, .${this.selector} img`);
        this.imgList = imgList;

        // Loops through all images
        this.imgList.each((index, img) => {
            // Gives <img> the inactive class, which hides GIF by default
            $(img).attr("class", `${this.imgCls} ff-active`);
            let style = $(img).attr("style");

            let renderClass = $(img).attr("data-render");
            let renderScale = $(img).attr("data-scale");

            // Creates <canvas> of GIF and copies data of first frame of animation
            let canvas = $("<canvas>");
            let newWidth = renderScale ? img.width / Number(renderScale) : img.width;
            let newHeight = renderScale ? img.height / Number(renderScale) : img.height;

            canvas.attr("width", newWidth);
            canvas.attr("height", newHeight);

            if (renderScale) {
                canvas.attr("style", `width:${img.width}px; height:${img.height}px;`);
            }

            canvas.attr("class", `${this.canvasCls} ff-inactive`);

            const ctx = canvas[0].getContext("2d");
            ctx.imageSmoothingEnabled = this.smoothing;

            const drawImage = () => {
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
            };

            if (img.complete && img.naturalWidth > 0) {
                drawImage();
            } else {
                $(img).one("load", drawImage);
            }


            // Creates container that will hold both <img> and <canvas>
            let wrapper = $(img).parent();
            let newWrapper = false;

            if (!wrapper.hasClass("ff-container")) {
                wrapper = $("<div>").addClass("ff-container");
                newWrapper = true;
            }

            if (style) {
                wrapper.attr("style", `${style}`);
                if ($(img).attr("data-inherit")) $(img).removeAttr("style");

                if ($(img).attr("data-classes")) {
                    wrapper.addClass($(img).attr("data-classes"));
                }
            }

            if (renderClass) {
                wrapper.attr("data-render", renderClass);
                $(img).removeAttr("data-render");
            }

            if (this.hover) {
                wrapper.addClass("ff-hover");
            }

            // Inserts container with <img> and <canvas> where <img> originally was
            if (newWrapper) {
                $(img).before(wrapper);
            }

            wrapper.append(img);
            wrapper.append(canvas);

        });
    }

    start() { // Starts animation
        this.imgList.each((index, img) => {
            $(img).attr("class", `${this.imgCls} ff-active`);
            $(img).next().attr("class", `${this.canvasCls} ff-inactive`);
        });
    }

    stop() { // Stops animation
        this.imgList.each((index, img) => {
            $(img).attr("class", `${this.imgCls} ff-inactive`);
            $(img).next().attr("class", `${this.canvasCls} ff-active`);
        });
    }

    toggle() { // Toggles animation based on current state
        this.imgList.each((index, img) => {
            const isInactive = $(img).hasClass("ff-inactive");

            $(img).attr(
                "class",
                `${this.imgCls} ${isInactive ? "ff-active" : "ff-inactive"}`
            );

            $(img).next("canvas").attr(
                "class",
                `${this.canvasCls} ${isInactive ? "ff-inactive" : "ff-active"}`
            );
        });
    }

}

// Waits for page to finish loading
$(document).ready(function () {
    const imgList = $("img.freeze, .freeze img, .ff-container");

    if (imgList.length === 0) {
        $(".toggle-gif").each(function () {
            if ($(this).css("display") === "none") {
                return;
            } else {
                $(this).hide();
            }
        });
        return;
    }

    const f = new FreezeImages();

    $(".play-gif").on("click", () => f.start());

    $(".stop-gif").on("click", () => f.stop());

    $(".toggle-gif").on("click", () => {
        f.toggle();

        $(".toggle-gif").each(function () {
            if ($(this).css("display") === "none") {
                $(this).css("display", "");
            } else {
                $(this).hide();
            }
        });
    });
});
