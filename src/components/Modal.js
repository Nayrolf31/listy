import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import data from '../data.json'

function Description() {
  const [smShow, setSmShow] = useState(false);
  
      return (
        <>
          <Button onClick={() => setSmShow(true)} className="me-2">
            Description
          </Button>

          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >

            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                {data.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Description</Modal.Body>

          </Modal>
          </>
      );
    }
//   }
//     )
//   }
// }

export default Description;