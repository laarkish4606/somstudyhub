import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          policy | contact us | about us f

        </div>
        <div className="container mx-auto text-center mt-2">
          <p>&copy; {new Date().getFullYear()} SomStudyHub. All rights reserved.</p>
        </div>
        

      </footer>
    </div>
  )
}

export default Footer