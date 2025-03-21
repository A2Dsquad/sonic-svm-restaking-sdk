/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/pump.json`.
 */
export type Pump = {
    "address": "J2TXZhnzwUUEUfgAbnsQqRz8g7EwJskrDo6LT51vvaVx",
    "metadata": {
      "name": "pump",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "buy",
        "discriminator": [
          102,
          6,
          61,
          18,
          1,
          218,
          235,
          234
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          },
          {
            "name": "bondingCurveTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "bondingCurvePaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "userTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "user"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "userPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "user"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "feeToPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "config.fee_to",
                  "account": "config"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "isExactIn",
            "type": "bool"
          },
          {
            "name": "inputNumber",
            "type": "u64"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "createBondingCurve",
        "discriminator": [
          94,
          139,
          158,
          50,
          69,
          95,
          8,
          45
        ],
        "accounts": [
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token",
            "writable": true
          },
          {
            "name": "payment"
          },
          {
            "name": "bondingCurveTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "bondingCurvePaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "feeToPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "config.fee_to",
                  "account": "config"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "payerPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "payer"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          {
            "name": "rent",
            "address": "SysvarRent111111111111111111111111111111111"
          },
          {
            "name": "payer",
            "writable": true,
            "signer": true
          }
        ],
        "args": []
      },
      {
        "name": "initialize",
        "discriminator": [
          175,
          175,
          109,
          31,
          13,
          152,
          155,
          237
        ],
        "accounts": [
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "payment"
          },
          {
            "name": "feeToPaymentAta",
            "pda": {
              "seeds": [
                {
                  "kind": "arg",
                  "path": "feeTo"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          {
            "name": "rent",
            "address": "SysvarRent111111111111111111111111111111111"
          },
          {
            "name": "payer",
            "writable": true,
            "signer": true
          }
        ],
        "args": [
          {
            "name": "feeTo",
            "type": "pubkey"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "creationFee",
            "type": "u64"
          },
          {
            "name": "totalSupply",
            "type": "u64"
          },
          {
            "name": "bondingCurveAmount",
            "type": "u64"
          },
          {
            "name": "toDexLiquidityBps",
            "type": "u64"
          },
          {
            "name": "tokenOffset",
            "type": "u64"
          },
          {
            "name": "paymentOffset",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "migrationAuthority",
            "type": "pubkey"
          }
        ]
      },
      {
        "name": "migrate",
        "discriminator": [
          155,
          234,
          231,
          146,
          236,
          158,
          162,
          30
        ],
        "accounts": [
          {
            "name": "migrationAuthority",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          },
          {
            "name": "bondingCurveTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "bondingCurvePaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "migrationTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "migrationAuthority"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "migrationPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "migrationAuthority"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          }
        ],
        "args": []
      },
      {
        "name": "quoteAmountIn",
        "discriminator": [
          5,
          226,
          45,
          65,
          164,
          197,
          33,
          21
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          }
        ],
        "args": [
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "isBuy",
            "type": "bool"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "quoteAmountOut",
        "discriminator": [
          124,
          182,
          163,
          197,
          254,
          8,
          16,
          110
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          }
        ],
        "args": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "isBuy",
            "type": "bool"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "quoteBuy",
        "discriminator": [
          83,
          9,
          231,
          110,
          146,
          31,
          40,
          12
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          }
        ],
        "args": [
          {
            "name": "inputNumber",
            "type": "u64"
          },
          {
            "name": "isExactIn",
            "type": "bool"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "quoteBuyInitial",
        "discriminator": [
          9,
          184,
          255,
          66,
          46,
          96,
          58,
          37
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          }
        ],
        "args": [
          {
            "name": "inputNumber",
            "type": "u64"
          },
          {
            "name": "isExactIn",
            "type": "bool"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "quoteSell",
        "discriminator": [
          5,
          178,
          49,
          206,
          140,
          231,
          131,
          145
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          }
        ],
        "args": [
          {
            "name": "inputNumber",
            "type": "u64"
          },
          {
            "name": "isExactIn",
            "type": "bool"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "sell",
        "discriminator": [
          51,
          230,
          133,
          164,
          1,
          127,
          131,
          173
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          },
          {
            "name": "bondingCurveTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "bondingCurvePaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "bondingCurve"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "userTokenAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "user"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "userPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "user"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "feeToPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "config.fee_to",
                  "account": "config"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "isExactIn",
            "type": "bool"
          },
          {
            "name": "inputNumber",
            "type": "u64"
          }
        ],
        "returns": "u64"
      },
      {
        "name": "setBondingCurveConfig",
        "discriminator": [
          115,
          52,
          116,
          244,
          182,
          152,
          146,
          254
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "totalSupply",
            "type": "u64"
          },
          {
            "name": "bondingCurveAmount",
            "type": "u64"
          },
          {
            "name": "toDexLiquidityBps",
            "type": "u64"
          },
          {
            "name": "tokenOffset",
            "type": "u64"
          },
          {
            "name": "paymentOffset",
            "type": "u64"
          }
        ]
      },
      {
        "name": "setCreationFee",
        "discriminator": [
          30,
          100,
          118,
          0,
          113,
          56,
          97,
          70
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "newCreationFee",
            "type": "u64"
          }
        ]
      },
      {
        "name": "setFeeBps",
        "discriminator": [
          2,
          161,
          245,
          141,
          111,
          32,
          39,
          198
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "newFeeBps",
            "type": "u64"
          }
        ]
      },
      {
        "name": "setFeeTo",
        "discriminator": [
          28,
          120,
          246,
          29,
          244,
          114,
          219,
          250
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "feeToPaymentAta",
            "pda": {
              "seeds": [
                {
                  "kind": "arg",
                  "path": "feeTo"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "config.payment",
                  "account": "config"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "newFeeTo",
            "type": "pubkey"
          }
        ]
      },
      {
        "name": "setMigrationAuthority",
        "discriminator": [
          232,
          252,
          69,
          23,
          55,
          183,
          181,
          21
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "migrationAuthority",
            "type": "pubkey"
          }
        ]
      },
      {
        "name": "setOwner",
        "discriminator": [
          72,
          202,
          120,
          52,
          77,
          128,
          96,
          197
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "newOwner",
            "type": "pubkey"
          }
        ]
      },
      {
        "name": "setPayment",
        "discriminator": [
          165,
          71,
          217,
          189,
          133,
          189,
          87,
          136
        ],
        "accounts": [
          {
            "name": "owner",
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "payment"
          },
          {
            "name": "feeToPaymentAta",
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "config.fee_to",
                  "account": "config"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "payer",
            "writable": true,
            "signer": true
          }
        ],
        "args": []
      },
      {
        "name": "setToDexLiquidityBps",
        "discriminator": [
          80,
          82,
          189,
          48,
          2,
          116,
          226,
          204
        ],
        "accounts": [
          {
            "name": "owner",
            "writable": true,
            "signer": true,
            "relations": [
              "config"
            ]
          },
          {
            "name": "config",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "newToDexLiquidityBps",
            "type": "u64"
          }
        ]
      },
      {
        "name": "unlock",
        "discriminator": [
          101,
          155,
          40,
          21,
          158,
          189,
          56,
          203
        ],
        "accounts": [
          {
            "name": "config",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    102,
                    105,
                    103
                  ]
                }
              ]
            }
          },
          {
            "name": "bondingCurve",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    111,
                    110,
                    100,
                    105,
                    110,
                    103,
                    95,
                    99,
                    117,
                    114,
                    118,
                    101
                  ]
                },
                {
                  "kind": "account",
                  "path": "token"
                }
              ]
            }
          },
          {
            "name": "token"
          },
          {
            "name": "payment"
          },
          {
            "name": "feeToPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "config.fee_to",
                  "account": "config"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "payerPaymentAta",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "account",
                  "path": "payer"
                },
                {
                  "kind": "const",
                  "value": [
                    6,
                    221,
                    246,
                    225,
                    215,
                    101,
                    161,
                    147,
                    217,
                    203,
                    225,
                    70,
                    206,
                    235,
                    121,
                    172,
                    28,
                    180,
                    133,
                    237,
                    95,
                    91,
                    55,
                    145,
                    58,
                    140,
                    245,
                    133,
                    126,
                    255,
                    0,
                    169
                  ]
                },
                {
                  "kind": "account",
                  "path": "payment"
                }
              ],
              "program": {
                "kind": "const",
                "value": [
                  140,
                  151,
                  37,
                  143,
                  78,
                  36,
                  137,
                  241,
                  187,
                  61,
                  16,
                  41,
                  20,
                  142,
                  13,
                  131,
                  11,
                  90,
                  19,
                  153,
                  218,
                  255,
                  16,
                  132,
                  4,
                  142,
                  123,
                  216,
                  219,
                  233,
                  248,
                  89
                ]
              }
            }
          },
          {
            "name": "associatedTokenProgram",
            "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          },
          {
            "name": "tokenProgram",
            "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          {
            "name": "payer",
            "writable": true,
            "signer": true
          }
        ],
        "args": [
          {
            "name": "message",
            "type": "string"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "config",
        "discriminator": [
          155,
          12,
          170,
          224,
          30,
          250,
          204,
          130
        ]
      },
      {
        "name": "curve",
        "discriminator": [
          191,
          180,
          249,
          66,
          180,
          71,
          51,
          182
        ]
      }
    ],
    "events": [
      {
        "name": "bondingCurveConfigChanged",
        "discriminator": [
          238,
          89,
          182,
          41,
          140,
          67,
          98,
          213
        ]
      },
      {
        "name": "bondingCurveCreated",
        "discriminator": [
          128,
          2,
          19,
          232,
          79,
          109,
          88,
          115
        ]
      },
      {
        "name": "bondingCurveEnded",
        "discriminator": [
          38,
          203,
          192,
          188,
          174,
          34,
          58,
          131
        ]
      },
      {
        "name": "creationFeeChanged",
        "discriminator": [
          236,
          51,
          80,
          81,
          45,
          245,
          119,
          186
        ]
      },
      {
        "name": "feeChanged",
        "discriminator": [
          103,
          252,
          132,
          250,
          1,
          49,
          116,
          145
        ]
      },
      {
        "name": "feeToChanged",
        "discriminator": [
          134,
          116,
          235,
          60,
          226,
          19,
          216,
          66
        ]
      },
      {
        "name": "ownerChanged",
        "discriminator": [
          34,
          223,
          103,
          225,
          239,
          231,
          51,
          53
        ]
      },
      {
        "name": "paymentChanged",
        "discriminator": [
          242,
          54,
          185,
          220,
          196,
          186,
          222,
          72
        ]
      },
      {
        "name": "setMigrationAuthority",
        "discriminator": [
          228,
          171,
          203,
          184,
          226,
          17,
          167,
          59
        ]
      },
      {
        "name": "swapped",
        "discriminator": [
          217,
          52,
          52,
          83,
          147,
          135,
          96,
          109
        ]
      },
      {
        "name": "toDexLiquidityBpsChanged",
        "discriminator": [
          121,
          216,
          96,
          123,
          130,
          188,
          104,
          243
        ]
      },
      {
        "name": "unlocked",
        "discriminator": [
          219,
          104,
          74,
          123,
          174,
          92,
          182,
          120
        ]
      },
      {
        "name": "withdrawn",
        "discriminator": [
          20,
          89,
          223,
          198,
          194,
          124,
          219,
          13
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "invalidFee",
        "msg": "invalidFee"
      },
      {
        "code": 6001,
        "name": "maxCurvesReached",
        "msg": "maxCurvesReached"
      },
      {
        "code": 6002,
        "name": "curveNotFound",
        "msg": "curveNotFound"
      },
      {
        "code": 6003,
        "name": "curveAlreadyReady",
        "msg": "curveAlreadyReady"
      },
      {
        "code": 6004,
        "name": "curvesNotReady",
        "msg": "curvesNotReady"
      },
      {
        "code": 6005,
        "name": "notEnoughCurves",
        "msg": "notEnoughCurves"
      },
      {
        "code": 6006,
        "name": "warAlreadyStarted",
        "msg": "warAlreadyStarted"
      },
      {
        "code": 6007,
        "name": "warNotStarted",
        "msg": "warNotStarted"
      },
      {
        "code": 6008,
        "name": "alreadyMinted",
        "msg": "alreadyMinted"
      },
      {
        "code": 6009,
        "name": "notEnoughTokenLeft",
        "msg": "notEnoughTokenLeft"
      },
      {
        "code": 6010,
        "name": "invalidBondingCurveAmount",
        "msg": "invalidBondingCurveAmount"
      },
      {
        "code": 6011,
        "name": "invalidToDexBps",
        "msg": "invalidToDexBps"
      },
      {
        "code": 6012,
        "name": "insufficientReserve",
        "msg": "insufficientReserve"
      },
      {
        "code": 6013,
        "name": "tokenAlreadyInitialized",
        "msg": "tokenAlreadyInitialized"
      },
      {
        "code": 6014,
        "name": "decimalsMismatch",
        "msg": "decimalsMismatch"
      },
      {
        "code": 6015,
        "name": "invalidPermission",
        "msg": "invalidPermission"
      },
      {
        "code": 6016,
        "name": "eUnexpectedAmount",
        "msg": "eUnexpectedAmount"
      },
      {
        "code": 6017,
        "name": "eBondingCurveEnded",
        "msg": "eBondingCurveEnded"
      },
      {
        "code": 6018,
        "name": "eBondingCurveNotEnded",
        "msg": "eBondingCurveNotEnded"
      },
      {
        "code": 6019,
        "name": "eInsufficientInputAmount",
        "msg": "eInsufficientInputAmount"
      },
      {
        "code": 6020,
        "name": "eInsufficientOutputAmount",
        "msg": "eInsufficientOutputAmount"
      }
    ],
    "types": [
      {
        "name": "bondingCurveConfigChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "totalSupply",
              "type": "u64"
            },
            {
              "name": "bondingCurveAmount",
              "type": "u64"
            },
            {
              "name": "tokenOffset",
              "type": "u64"
            },
            {
              "name": "paymentOffset",
              "type": "u64"
            },
            {
              "name": "toDexLiquidityBps",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "bondingCurveCreated",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "creator",
              "type": "pubkey"
            },
            {
              "name": "curve",
              "type": "pubkey"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "payment",
              "type": "pubkey"
            },
            {
              "name": "tokenOffset",
              "type": "u64"
            },
            {
              "name": "paymentOffset",
              "type": "u64"
            },
            {
              "name": "totalSupply",
              "type": "u64"
            },
            {
              "name": "bondingCurveAmount",
              "type": "u64"
            },
            {
              "name": "toDexLiquidityBps",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "bondingCurveEnded",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "curve",
              "type": "pubkey"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "paymentReserve",
              "type": "u64"
            },
            {
              "name": "tokenReserve",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "config",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "totalSupply",
              "type": "u64"
            },
            {
              "name": "bondingCurveAmount",
              "type": "u64"
            },
            {
              "name": "toDexLiquidityBps",
              "type": "u64"
            },
            {
              "name": "tokenOffset",
              "type": "u64"
            },
            {
              "name": "paymentOffset",
              "type": "u64"
            },
            {
              "name": "payment",
              "type": "pubkey"
            },
            {
              "name": "owner",
              "type": "pubkey"
            },
            {
              "name": "feeTo",
              "type": "pubkey"
            },
            {
              "name": "fee",
              "type": "u64"
            },
            {
              "name": "creationFee",
              "type": "u64"
            },
            {
              "name": "migrationAuthority",
              "type": "pubkey"
            },
            {
              "name": "padding",
              "type": {
                "array": [
                  "u64",
                  2
                ]
              }
            }
          ]
        }
      },
      {
        "name": "creationFeeChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "newCreationFee",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "curve",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "payment",
              "type": "pubkey"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "totalSupply",
              "type": "u64"
            },
            {
              "name": "bondingCurveAmount",
              "type": "u64"
            },
            {
              "name": "paymentVirtualReserve",
              "type": "u64"
            },
            {
              "name": "tokenVirtualReserve",
              "type": "u64"
            },
            {
              "name": "paymentOffset",
              "type": "u64"
            },
            {
              "name": "tokenOffset",
              "type": "u64"
            },
            {
              "name": "toDexLiquidityBps",
              "type": "u64"
            },
            {
              "name": "ended",
              "type": "bool"
            }
          ]
        }
      },
      {
        "name": "feeChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "newFee",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "feeToChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "newFeeTo",
              "type": "pubkey"
            },
            {
              "name": "oldFeeTo",
              "type": "pubkey"
            }
          ]
        }
      },
      {
        "name": "ownerChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "newOwner",
              "type": "pubkey"
            },
            {
              "name": "oldOwner",
              "type": "pubkey"
            }
          ]
        }
      },
      {
        "name": "paymentChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "payment",
              "type": "pubkey"
            }
          ]
        }
      },
      {
        "name": "setMigrationAuthority",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "migrationAuthority",
              "type": "pubkey"
            }
          ]
        }
      },
      {
        "name": "swapped",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "curve",
              "type": "pubkey"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "user",
              "type": "pubkey"
            },
            {
              "name": "amountIn",
              "type": "u64"
            },
            {
              "name": "amountOut",
              "type": "u64"
            },
            {
              "name": "fee",
              "type": "u64"
            },
            {
              "name": "paymentVirtualReserve",
              "type": "u64"
            },
            {
              "name": "tokenVirtualReserve",
              "type": "u64"
            },
            {
              "name": "isBuy",
              "type": "bool"
            }
          ]
        }
      },
      {
        "name": "toDexLiquidityBpsChanged",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "newToDexLiquidityBps",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "unlocked",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "payer",
              "type": "pubkey"
            },
            {
              "name": "message",
              "type": "string"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "bondingCurve",
              "type": "pubkey"
            },
            {
              "name": "fee",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "withdrawn",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "curve",
              "type": "pubkey"
            },
            {
              "name": "token",
              "type": "pubkey"
            },
            {
              "name": "payment",
              "type": "pubkey"
            },
            {
              "name": "tokenReserve",
              "type": "u64"
            },
            {
              "name": "paymentReserve",
              "type": "u64"
            }
          ]
        }
      }
    ]
  };
  