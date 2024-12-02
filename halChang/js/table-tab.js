function toggle(e, month) {
  let i, tabcontent, tablinks;

  // 將所有的 tabcontent 顯示關閉
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // 將非當前選取的 Tab 取消 active 狀態
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 顯示當前月份的 tabcontent 並加入 active 狀態
  document.getElementById(month).style.display = "block";
  e.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
