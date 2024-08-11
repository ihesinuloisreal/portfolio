import {useState, useContext} from 'react';
import {postMessageContext} from '../../context/request.context'

const Contact = () => {
  const {dataInput, setDataInput} = useContext(postMessageContext)
  const [localInput, setLocalInput] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLocalInput({ ...localInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!localInput.name || !localInput.email || !localInput.message){
      return console.log("Fill all empty field")
    } else {
      await setDataInput(localInput);
    }
  }
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit = {handleSubmit}>
          <input type="text" name="name" onChange={handleChange} placeholder="Name" className="p-2 border rounded" />
          <input type="email" name="email" onChange={handleChange} placeholder="Email" className="p-2 border rounded" />
          <textarea name="message" onChange={handleChange} placeholder="Message" className="p-2 border rounded col-span-1 md:col-span-2"></textarea>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded col-span-1 md:col-span-2">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
