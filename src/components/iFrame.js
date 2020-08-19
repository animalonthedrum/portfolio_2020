import React from 'react';

  
  function IFrame (props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  
  function ViewPort() {
    const src = '<iframe width="100%" height="500px" scrolling="yes" frameborder="no" allow="autoplay" src="https://www.sportsengine.com"></iframe>';
    return (
      <div className="container">
        <IFrame iframe={src} allow="autoplay" />,
      </div>
    );
  }

  export default ViewPort;