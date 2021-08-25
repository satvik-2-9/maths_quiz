import React from 'react'
import reactDom from 'react-dom';
import styled from 'styled-components';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}
  
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right:10px;
`;
  

export default function Modal({ open, children, onClose,off}) {
    if (!open) return null;
    
    return reactDom.createPortal(
        <>
            
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                 <h1>Are you sure?</h1>
                <Button onClick={onClose}>Yes</Button>
                <Button onClick={off}>No</Button>
                 {children}
            </div>
        </>,
                document.getElementById('portal')
    )
}



// the problem with rendering outside of its parent can be solved by react portals
// react protals help us in displaying a child element over a parent element . 