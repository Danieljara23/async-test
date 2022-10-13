# Cómo hacerle test a una función asíncrona ?

En primer lugar, supongamos que tenemos la función `getTodoList` que retornará una promesa. Si esta promesa se resuelve de forma satisfactoria, retornará un listado de tareas, de lo contrario arrojará un error.

```javascript
const getTodoList = (status = "") => {
  return new Promise((resolve, reject) => {
    if (status === "success") {
      setTimeout(() => {
        resolve(todoList);
      }, 500);
    } else {
      setTimeout(() => {
        reject(new Error("We couldn't get your todo List"));
      }, 500);
    }
  });
};
```

_*Nota*: el parámetro status es utilizado únicamente para controlar que la función sea resuelta o rechazada en el test._

## Cómo podemos testear dicha función?

Jest nos provee los _matchers_ `resolves` y `rejects` para estos casos. Es decir, jest esperará a que la promesa sea resuelta.

### Promesa resuelta de forma exitosa:

```javascript
it("getItems should resolve returning a list of todoItems", () => {
  return expect(getTodoList("success")).resolves.toStrictEqual(mockedTodoList);
});
```

- En primer lugar, llamamos la función `getTodoList`
- Utilizando el _matcher_ `resolves`, garantizaremos que la promesa sea resuelta de manera exitosa
- Validamos que el valor retornado por la promesa resuelta sea igual al indicado en nuestra lista de tareas _mockeada_

### Promesa rechazada

```javascript
it("getItems should thrown an error when it gets rejected", () => {
  return expect(getTodoList()).rejects.toThrow(
    "We couldn't get your todo List"
  );
});
```

- En primer lugar, llamamos la función `getTodoList`
- Utilizando el _matcher_ `rejects`, garantizaremos que la promesa falle
- Validamos que el error si se arroje una vez la promesa se rechaza
