/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './../src/js/app';

describe('App Component', function () {
  this.timeout(6500);
  this.slow(3000);

  it('should shallow render', () => {
    expect(shallow(<App />).contains(<h3 className="text-center font-weight-bold mt-4 mb-4 text-light">Mortgage Calculator</h3>)).to.equal(true);
  });
});
