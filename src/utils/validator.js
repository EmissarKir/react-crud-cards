export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "min":
        statusValidate = data.length < config.value;
        break;
      case "validateDate":
        let yearNow = new Date().getFullYear();
        statusValidate = !(data <= yearNow && data >= yearNow - 120);
        break;
      case "isLink":
        const linkRegExp = /^https:\/\/\S+\.\S+$/g;
        statusValidate = !linkRegExp.test(data);
        break;

      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
