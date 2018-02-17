const express = require("express")
const axios = require("axios")

const index = async (req, res, next) => {
  const gitID = req.body.gitID || 'pichaya'
  endpoint = `https://api.github.com/users/${gitID}/followers`
  const responseFormGit = await axios.get(endpoint)
  res.render('index', { followerData:  responseFormGit.data, gitID})
}

module.exports = {
  index,
}