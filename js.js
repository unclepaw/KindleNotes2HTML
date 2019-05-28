$(document).ready(function() {
  $(".notebookFor").remove();
  $(".bookTitle").remove();
  $(".authors").remove();
  $("hr:first").remove();

  $(".noteText").contents().wrap('<div class="textWrap"></div>'); //给noteText下面的元素套<div>
  $("h3").unwrap(); // 让h3解脱上一步的套
  $(".textWrap").unwrap(); // 让文本解脱noteText

  $("h3:contains('标注')").next().addClass("biaoZhu"); //给有标注的h3的下一个同胞元素加class
  $("h3:contains('备注')").next().addClass("beiZhu"); //给有标注的h3的下一个同胞元素加class

  $("h3:contains('蓝色')").next().addClass("blue"); //给h3文本中有标注两字的下一个同胞元素加class
  $("h3:contains('黄色')").next().addClass("yellow");
  $("h3:contains('橙色')").next().addClass("orange");
  $("h3:contains('粉色')").next().addClass("pink");

  $("h3:contains('备注')").remove(); //把有备注的h3删掉

  //把biaoZhu之间的空格去掉，小黄给的代码
  $(".biaoZhu").each(function() {
    $(this).text($(this).text().replace(/\s/g, ''))
  })
});
