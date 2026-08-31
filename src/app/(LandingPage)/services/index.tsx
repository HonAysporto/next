"use client";

const Services = () => {
    const handleClick = () => {
        alert('Something');
    }
  return (
    <div>
        <button className="border rounded-2xl p-3 cursor-pointer hover:bg-amber-50 hover:text-black ease-in-out transition" onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Services