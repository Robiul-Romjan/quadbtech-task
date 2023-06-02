import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'


const ShowDetailsModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const showName = props.movie.show.name;

  const generateUserId = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}_${random}`;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const showName = form.showName.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const userInformation = { showName, userName, email, phone };
    const userId = generateUserId()

    localStorage.setItem(`user-${userId}`, JSON.stringify(userInformation));

    Swal.fire({
      title: 'Success!',
      text: 'You have successfully booking the ticket',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    form.reset()
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label>Show Name:</label>
            <input type="text" className="form-control mb-4" name='showName' defaultValue={showName} />
          </div>
          <div className="form-group">
            <label>Your Name:</label>
            <input type="text" className="form-control mb-4" name='userName' placeholder='type your name' required />
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input type="email" className="form-control mb-4" name='email' placeholder='type your email' required />
          </div>
          <div className="form-group">
            <label>Your Phone Number:</label>
            <input type="number" className="form-control mb-4" name='phone' placeholder='type your phone number' required />
          </div>
          <div className='text-center'>
            <input className='btn btn-danger' type="submit" value="Submit" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ShowDetailsModal;