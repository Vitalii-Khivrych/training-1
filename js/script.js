const bodyRef = document.querySelector("body");

const onMoveButton = (e) => {
  const { target: button } = e;

  button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
  button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;
};
bodyRef.addEventListener("mouseover", onMoveButton);
