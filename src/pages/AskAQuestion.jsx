import React from 'react'
import { Form } from 'react-router-dom'

const AskAQuestion = () => {
  return (
    <div className=" m-2 px-4 py-2 rounded-lg bg-white shadow-xl">
      <Form
        className=" flex flex-col gap-y-5 w-3/4"
        method="post"
      >

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Title
          </label>
          <span className=" text-xs">Be specific and imagine you’re asking a question to another person.</span>
          <input
            type="text"
            name="title"
            className="form-input px-4 py-2 my-1 rounded-md "
            placeholder="e.g. What is a JavaScript function"
          />
        </div>

        <div className=" flex flex-col">
          <label className=" text-2xl font-semibold">
            What are the details of your problem?
          </label>
          <span className=" text-xs">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</span>
          <textarea
            type="text"
            name="message"
            className="form-textarea px-4 py-2 my-1 rounded-md"
            placeholder="Describe the problem you're having"
          />
        </div>

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Upload a screenshot of the problem
          </label>
          <input
            type="file"
            name="file"
            className="form-input px-4 py-2 my-1 rounded-md "
          />
        </div>

        <select className="">
          <label htmlFor="">
            Programming Language
          </label>
          <option selected>Select the problem's Programming language</option>
          <option value="1">Javascript</option>
          <option value="2">Python</option>
          <option value="3">Java</option>
          <option value="4">PHP</option>
          <option value="5">Angular</option>
          <option value="6">Vue</option>
          <option value="7">React</option>
          <option value="8">Mongodb</option>
          <option value="9">SQL</option>
          <option value="10">MYSQL</option>
          <option value="10">Next.js</option>
        </select>

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Input Porfolio URL
          </label>
          <input
            type="text"
            name="portfolio"
            className="form-input px-4 py-2 my-1 rounded-md "
            placeholder="https://github/mike/Portfolio.com"
          />
        </div>

        <button
          className=" bg-blue-500 rounded-md py-2 uppercase font-semibold text-white"
          type="button"
        >
          Post
        </button>
      </Form>
    </div>
  )
}

export default AskAQuestion