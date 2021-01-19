const parseFormValues = keyValuePair => {
  const splittedKeyValuePair = keyValuePair.split('=');
  const [key, value] = [splittedKeyValuePair[0], splittedKeyValuePair[1]];

  return {
    [key]: value
  };
}

module.exports = {
  parseFormValues
}