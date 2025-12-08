{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  // console.log(y); //app crash
}

const text = "global"; //global scope
{
  const text = "inside block1"; //local scope
  {
    console.log(text); //"inside blick1"
  }
}
