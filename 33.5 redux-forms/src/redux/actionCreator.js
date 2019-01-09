export const addWizard = (wizard) => {
  return {type: "ADD_WIZARD", payload: wizard}
}

export const deleteWizard = (wizard) => {
  return {type: "DELETE_WIZARD", payload: wizard}
}
