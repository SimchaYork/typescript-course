function Logger(logString: string) {
  console.log('Bar!')
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('Foo!')
  return function(constructor: any) {
    console.log('Rendering template...')
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('Getting schwifty...')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Simcha';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
