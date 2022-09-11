import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Pool } = require('pg');
const pool = new Pool();
pool.connect();

@Controller('/api/v1')
export class GraphsController {
  @Get('/graphic-1')
  async getGraphs1() {
    const source = await pool.query(
      'SELECT DISTINCT source FROM "1_csv" WHERE source IS NOT NULL',
    );
    const credit_type = await pool.query(
      'SELECT DISTINCT credit_type FROM "1_csv" WHERE credit_type IS NOT NULL',
    );
    return {
      source: source.rows.map(({ source }) => source),
      credit_type: credit_type.rows.map(({ credit_type }) => credit_type),
    };
  }
  @Get('/graphic-2')
  async getGraphs2() {
    const tonality = await pool.query(
      'SELECT DISTINCT tonality FROM "5_csv" WHERE tonality IS NOT NULL',
    );
    const source = await pool.query(
      'SELECT DISTINCT source FROM "5_csv" WHERE source IS NOT NULL',
    );
    const credit_type = await pool.query(
      'SELECT DISTINCT credit_type FROM "5_csv" WHERE credit_type IS NOT NULL',
    );
    return {
      tonality: tonality.rows.map(({ tonality }) => tonality),
      source: source.rows.map(({ source }) => source),
      credit_type: credit_type.rows.map(({ credit_type }) => credit_type),
    };
  }
  @Get('/graphic-3')
  async getGraphs3() {
    const tonality = await pool.query(
      'SELECT DISTINCT tonality FROM "6_csv" WHERE tonality IS NOT NULL',
    );
    const source = await pool.query(
      'SELECT DISTINCT source FROM "6_csv" WHERE source IS NOT NULL',
    );
    const credit_type = await pool.query(
      'SELECT DISTINCT credit_type FROM "6_csv" WHERE credit_type IS NOT NULL',
    );
    return {
      tonality: tonality.rows.map(({ tonality }) => tonality),
      source: source.rows.map(({ source }) => source),
      credit_type: credit_type.rows.map(({ credit_type }) => credit_type),
    };
  }
}
