/*
6- Realizar una web con un temporizador donde el usuario pueda ingresar un
tiempo desde donde comenzará a decrementar el contador. Debe contener los
botones, iniciar, pausar y reset.

*/

const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Dec 31 2025 21:34:40 GMT-0500', 'clock', '¡Ya empezó!');
  