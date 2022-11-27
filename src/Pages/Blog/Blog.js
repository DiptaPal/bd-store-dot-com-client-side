import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="space-y-4 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1440px] md:px-24 lg:px-8 my-28 text-left text-2xl">
            <h1 className='text-3xl font-bold text-center border-b-4 border-primary pb-2 text-black mb-10 max-w-[290px] mx-auto'>All Blog Is Here</h1>
            <details className="group border-l-4 border-primary bg-white shadow p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        What are the different ways to manage a state in a React application?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-primary sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="mt-4 text-justify leading-relaxed text-black md:text-xl">
                    In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. <br /><br />
                    <strong>URL</strong><br />
                    We can use URL to store some data e.g. <br />

                    <ul className='pl-10'>
                        <li className='list-disc'>The id of the current item, being viewed</li>
                        <li className='list-disc'>Filter parameters</li>
                        <li className='list-disc'>Pagination offset and limit</li>
                        <li className='list-disc'>Sorting data</li>
                        <li className='list-disc'>Keeping such data in the URL allows users to share deep links with others.</li>
                    </ul> <br />
                    Keeping such data in the URL allows users to share deep links with others. <br /><br />

                    It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change. <br /><br />

                    React Router is a great tool to handle routes and manage the params.We do not need to store the id in a state or pass it as props to the ProductDetails component instead, it can be fetched using useParams(). <br /> <br />

                    <strong>Web Storage</strong> <br />
                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. <br /><br />

                    Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. <br /><br />

                    We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie. <br /><br />

                    <strong>Local State</strong><br />
                    The third option is to use store state locally. It is useful when one component needs the state. <br /><br />

                    <strong>Lifted State</strong><br />
                    The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. <br /><br />

                    <strong>Derived State</strong> <br />
                    The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty. <br /><br />

                    So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.
                </div>
            </details>

            <details className="group border-l-4 border-primary bg-white shadow p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg text-left md:text-2xl font-medium text-gray-900">
                        How does prototypical inheritance work?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-primary sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className='mb-4'>Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                <img src="https://i.ibb.co/f2CFVV0/Untitled-Diagram108.png" alt="" />
            </details>

            <details className="group border-l-4 border-primary bg-white shadow p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        What is a unit test? Why should we write unit tests?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-primary sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p>
                    <strong>Unit Testing:</strong> Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                    <br /><br />
                    <strong>Why should we write unit tests?</strong> <span>
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </span>
                </p>
            </details>

            <details className="group border-l-4 border-primary bg-white shadow p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        React vs. Angular vs. Vue?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-primary sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="overflow-x-auto my-4">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>React</th>
                                <th>Angular</th>
                                <th>Vue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Framework size</th>
                                <td>143K</td>
                                <td>97.5K</td>
                                <td>58.8K</td>
                            </tr>
                            <tr>
                                <th>Programming Language</th>
                                <td>Typescript</td>
                                <td>JavaScript</td>
                                <td>JavaScript</td>
                            </tr>
                            <tr>
                                <th>Ui component</th>
                                <td>in-built material techstack</td>
                                <td>React UI Tools</td>
                                <td>Component libraries</td>
                            </tr>
                            <tr>
                                <th>Architecture</th>
                                <td>component-based</td>
                                <td>component-based</td>
                                <td>component-based</td>
                            </tr>
                            <tr>
                                <th>Learning curve</th>
                                <td>sleep</td>
                                <td>moderate</td>
                                <td>moderate</td>
                            </tr>
                            <tr>
                                <th>Syntax</th>
                                <td>Real Dom</td>
                                <td>Virtual Dom</td>
                                <td>Virtual Dom</td>
                            </tr>
                            <tr>
                                <th>Scalability</th>
                                <td>modular development structure</td>
                                <td>component-base approach</td>
                                <td>template-base approach</td>
                            </tr>
                            <tr>
                                <th>Migrations</th>
                                <td>API upgrade</td>
                                <td>Reach codemod script</td>
                                <td>Migration helper approach</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
    );
};

export default Blog;