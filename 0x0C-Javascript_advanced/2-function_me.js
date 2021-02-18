function welcomeMessage (fullName) {
  function closure () {
    alert('Welcome ' + fullName);
  }
  return closure;
}
const guillaume = welcomeMessage('guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
