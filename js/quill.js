var toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  [("blockquote", "code-block")],
  [{ header: [1, 2, 3, 4, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["image", "video", "formula"],
  ["clean"],
];

var quill = new Quill(".editor", {
  modules: {
    toolbar: toolbarOptions,
  },

  theme: "snow",
});

//quill.enable(false);

//Toaster notifications

document.getElementById("theButton3").addEventListener("click", function () {
  $.toast({
    heading: "Sorry for inconvenience",
    text: "About Page still under construction.",
    icon: "info",
    showHideTransition: "slide",
    bgColor: "orange",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});
