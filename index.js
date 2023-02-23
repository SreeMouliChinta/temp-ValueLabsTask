function Search() {
  let searchEL = document.getElementById("search");
  let filterEL = searchEL.value.toUpperCase();
  let empCardEL = document.getElementsByClassName("emp-card");
  for (let i = 0; i < empCardEL.length; i++) {
    let empNameEL = empCardEL[i].getElementsByClassName("emp-name")[0];
    let searchValue = empNameEL.innerText.toUpperCase();
    if (searchValue.indexOf(filterEL) > -1) {
      empCardEL[i].style.display = "";
    } else {
      empCardEL[i].style.display = "none";
    }
  }
}

function Sort() {
  let sortEL = document.getElementById("drop-down");
  if (sortEL.value === "sort-by-name") {
    let empNameEL = "emp-name";
    ShouldSort(empNameEL);
  } else {
    let empIDEL = "emp-id";
    ShouldSort(empIDEL);
  }
}

function ShouldSort(emp_Name_ID) {
  let switching, empCard, shouldSwitch, currentEmp_Name_ID, nextEmp_Name_ID;
  let empInfoCards = document.getElementById("emp-info-cards");
  switching = true;
  while (switching) {
    switching = false;
    empCard = empInfoCards.getElementsByClassName("emp-card");
    for (let i = 0; i < empCard.length - 1; i++) {
      shouldSwitch = false;
      currentEmp = empCard[i];
      currentEmp_Name_ID = currentEmp.getElementsByClassName(emp_Name_ID)[0];
      nextEmp = empCard[i + 1];
      nextEmp_Name_ID = nextEmp.getElementsByClassName(emp_Name_ID)[0];
      if (
        currentEmp_Name_ID.innerText.toUpperCase() >
        nextEmp_Name_ID.innerText.toUpperCase()
      ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      currentEmp.parentNode.insertBefore(nextEmp, currentEmp);
      switching = true;
    }
  }
}
