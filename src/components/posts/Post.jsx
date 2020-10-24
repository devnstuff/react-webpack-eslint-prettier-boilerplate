/* eslint-disable react/prop-types */
import React from 'react';

export default function Post({ data }) {
  return data.map((i) => (
    <div key={i.id}>
      <h3>{i.title}</h3>
      <p>{i.body}</p>
    </div>
  ));
}
