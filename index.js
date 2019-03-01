var recipes = { food: 'bar'}

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign({}, object, {key: value})
  return object
}

