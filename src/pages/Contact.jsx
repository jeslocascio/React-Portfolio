import React from 'react'

function Contact() {
  return (
    <>
    <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name"></input>
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" name="email"></input>
    <label htmlFor="message">Message:</label>
    <textarea rows="4" id="message" name="message"></textarea>
    <input type="submit" value="Submit">Submit</input>
    </form>
    </>
  )
}

export default Contact