// set initial count
let count = 0;

// select value and buttons
const val = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("dec")) {
      count--;
    } else if (styles.contains("inc")) {
      count++;
    }
    else{
        count=0;
    }

    // color change
    if(count > 0){
        val.style.color="green";
    }
    else if(count < 0){
        val.style.color="red";
    }
    else{
        val.style.color="black";
    }
    val.innerText = count;
  });
});
