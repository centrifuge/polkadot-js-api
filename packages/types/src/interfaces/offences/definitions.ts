// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    DeferredOffenceOf: '(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)',
    Kind: '[u8; 16]',
    OffenceDetails: {
      offender: 'Offender',
      reporters: 'Vec<Reporter>'
    },
    Offender: 'IdentificationTuple',
    OpaqueTimeSlot: 'Bytes',
    ReportIdOf: 'Hash',
    Reporter: 'AccountId'
  }
} as Definitions;
