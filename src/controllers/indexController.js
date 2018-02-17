const express = require("express")

const index = async (req, res, next) => {
  res.render('index', { title: 'Hey', message: 'Meow' })
}

const onPost = async (req, res, next) => {
  console.log(req)
  res.json('HelloWorld')
}

module.exports = {
  index,
  onPost
}