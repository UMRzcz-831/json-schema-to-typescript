export const input = {
  $schema: 'http://json-schema.org/draft-03/schema',
  id: 'http://mycompany.com/api/referencing.json',
  title: 'Referencing',
  type: 'object',
  properties: {
    ref: {
      $ref: 'test/resources/ReferencedType.json'
    }
  },
  required: ['ref'],
  additionalProperties: false
}

/**
 * Verify that both generated types names are derived from the schema.title
 */
export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Referencing {
  ref: ExampleSchema;
}
export interface ExampleSchema {
  firstName: string;
  lastName: string;
  /**
   * Age in years
   */
  age?: number;
  height?: number;
  favoriteFoods?: any[];
  likesDogs?: boolean;
  [k: string]: any;
}
`