// @ts-nocheck
import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "authors" */
export type Authors = {
  __typename: 'authors';
  /** An array relationship */
  book_authors: Array<Book_Authors>;
  /** An aggregate relationship */
  book_authors_aggregate: Book_Authors_Aggregate;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "authors" */
export type AuthorsBook_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


/** columns and relationships of "authors" */
export type AuthorsBook_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};

/** aggregated selection of "authors" */
export type Authors_Aggregate = {
  __typename: 'authors_aggregate';
  aggregate?: Maybe<Authors_Aggregate_Fields>;
  nodes: Array<Authors>;
};

/** aggregate fields of "authors" */
export type Authors_Aggregate_Fields = {
  __typename: 'authors_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Authors_Max_Fields>;
  min?: Maybe<Authors_Min_Fields>;
};


/** aggregate fields of "authors" */
export type Authors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Authors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "authors". All fields are combined with a logical 'AND'. */
export type Authors_Bool_Exp = {
  _and?: InputMaybe<Array<Authors_Bool_Exp>>;
  _not?: InputMaybe<Authors_Bool_Exp>;
  _or?: InputMaybe<Array<Authors_Bool_Exp>>;
  book_authors?: InputMaybe<Book_Authors_Bool_Exp>;
  book_authors_aggregate?: InputMaybe<Book_Authors_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "authors" */
export enum Authors_Constraint {
  /** unique or primary key constraint on columns "name" */
  AuthorsNameKey = 'authors_name_key',
  /** unique or primary key constraint on columns "id" */
  AuthorsPkey = 'authors_pkey'
}

/** input type for inserting data into table "authors" */
export type Authors_Insert_Input = {
  book_authors?: InputMaybe<Book_Authors_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Authors_Max_Fields = {
  __typename: 'authors_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Authors_Min_Fields = {
  __typename: 'authors_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "authors" */
export type Authors_Mutation_Response = {
  __typename: 'authors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Authors>;
};

/** input type for inserting object relation for remote table "authors" */
export type Authors_Obj_Rel_Insert_Input = {
  data: Authors_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Authors_On_Conflict>;
};

/** on_conflict condition type for table "authors" */
export type Authors_On_Conflict = {
  constraint: Authors_Constraint;
  update_columns?: Array<Authors_Update_Column>;
  where?: InputMaybe<Authors_Bool_Exp>;
};

/** Ordering options when selecting data from "authors". */
export type Authors_Order_By = {
  book_authors_aggregate?: InputMaybe<Book_Authors_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authors */
export type Authors_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "authors" */
export enum Authors_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "authors" */
export type Authors_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authors" */
export type Authors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Authors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Authors_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "authors" */
export enum Authors_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Authors_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Authors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Authors_Bool_Exp;
};

/** columns and relationships of "book_authors" */
export type Book_Authors = {
  __typename: 'book_authors';
  /** An object relationship */
  author: Authors;
  author_id: Scalars['uuid']['output'];
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid']['output'];
  ord: Scalars['smallint']['output'];
};

/** aggregated selection of "book_authors" */
export type Book_Authors_Aggregate = {
  __typename: 'book_authors_aggregate';
  aggregate?: Maybe<Book_Authors_Aggregate_Fields>;
  nodes: Array<Book_Authors>;
};

export type Book_Authors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Book_Authors_Aggregate_Bool_Exp_Count>;
};

export type Book_Authors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Book_Authors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Authors_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "book_authors" */
export type Book_Authors_Aggregate_Fields = {
  __typename: 'book_authors_aggregate_fields';
  avg?: Maybe<Book_Authors_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Authors_Max_Fields>;
  min?: Maybe<Book_Authors_Min_Fields>;
  stddev?: Maybe<Book_Authors_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Authors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Authors_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Authors_Sum_Fields>;
  var_pop?: Maybe<Book_Authors_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Authors_Var_Samp_Fields>;
  variance?: Maybe<Book_Authors_Variance_Fields>;
};


/** aggregate fields of "book_authors" */
export type Book_Authors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Authors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "book_authors" */
export type Book_Authors_Aggregate_Order_By = {
  avg?: InputMaybe<Book_Authors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Authors_Max_Order_By>;
  min?: InputMaybe<Book_Authors_Min_Order_By>;
  stddev?: InputMaybe<Book_Authors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Book_Authors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Book_Authors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Book_Authors_Sum_Order_By>;
  var_pop?: InputMaybe<Book_Authors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Book_Authors_Var_Samp_Order_By>;
  variance?: InputMaybe<Book_Authors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "book_authors" */
export type Book_Authors_Arr_Rel_Insert_Input = {
  data: Array<Book_Authors_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Book_Authors_On_Conflict>;
};

/** aggregate avg on columns */
export type Book_Authors_Avg_Fields = {
  __typename: 'book_authors_avg_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "book_authors" */
export type Book_Authors_Avg_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "book_authors". All fields are combined with a logical 'AND'. */
export type Book_Authors_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Authors_Bool_Exp>>;
  _not?: InputMaybe<Book_Authors_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Authors_Bool_Exp>>;
  author?: InputMaybe<Authors_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  ord?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "book_authors" */
export enum Book_Authors_Constraint {
  /** unique or primary key constraint on columns "author_id", "book_id" */
  BookAuthorsPkey = 'book_authors_pkey'
}

/** input type for incrementing numeric columns in table "book_authors" */
export type Book_Authors_Inc_Input = {
  ord?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "book_authors" */
export type Book_Authors_Insert_Input = {
  author?: InputMaybe<Authors_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  ord?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate max on columns */
export type Book_Authors_Max_Fields = {
  __typename: 'book_authors_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  book_id?: Maybe<Scalars['uuid']['output']>;
  ord?: Maybe<Scalars['smallint']['output']>;
};

/** order by max() on columns of table "book_authors" */
export type Book_Authors_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  ord?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Authors_Min_Fields = {
  __typename: 'book_authors_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  book_id?: Maybe<Scalars['uuid']['output']>;
  ord?: Maybe<Scalars['smallint']['output']>;
};

/** order by min() on columns of table "book_authors" */
export type Book_Authors_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  ord?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "book_authors" */
export type Book_Authors_Mutation_Response = {
  __typename: 'book_authors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Book_Authors>;
};

/** on_conflict condition type for table "book_authors" */
export type Book_Authors_On_Conflict = {
  constraint: Book_Authors_Constraint;
  update_columns?: Array<Book_Authors_Update_Column>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};

/** Ordering options when selecting data from "book_authors". */
export type Book_Authors_Order_By = {
  author?: InputMaybe<Authors_Order_By>;
  author_id?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  ord?: InputMaybe<Order_By>;
};

/** primary key columns input for table: book_authors */
export type Book_Authors_Pk_Columns_Input = {
  author_id: Scalars['uuid']['input'];
  book_id: Scalars['uuid']['input'];
};

/** select columns of table "book_authors" */
export enum Book_Authors_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  BookId = 'book_id',
  /** column name */
  Ord = 'ord'
}

/** input type for updating data in table "book_authors" */
export type Book_Authors_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  ord?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate stddev on columns */
export type Book_Authors_Stddev_Fields = {
  __typename: 'book_authors_stddev_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "book_authors" */
export type Book_Authors_Stddev_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Book_Authors_Stddev_Pop_Fields = {
  __typename: 'book_authors_stddev_pop_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "book_authors" */
export type Book_Authors_Stddev_Pop_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Book_Authors_Stddev_Samp_Fields = {
  __typename: 'book_authors_stddev_samp_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "book_authors" */
export type Book_Authors_Stddev_Samp_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "book_authors" */
export type Book_Authors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Authors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Authors_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  ord?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Book_Authors_Sum_Fields = {
  __typename: 'book_authors_sum_fields';
  ord?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "book_authors" */
export type Book_Authors_Sum_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** update columns of table "book_authors" */
export enum Book_Authors_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  BookId = 'book_id',
  /** column name */
  Ord = 'ord'
}

export type Book_Authors_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Book_Authors_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Book_Authors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Book_Authors_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Book_Authors_Var_Pop_Fields = {
  __typename: 'book_authors_var_pop_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "book_authors" */
export type Book_Authors_Var_Pop_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Book_Authors_Var_Samp_Fields = {
  __typename: 'book_authors_var_samp_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "book_authors" */
export type Book_Authors_Var_Samp_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Book_Authors_Variance_Fields = {
  __typename: 'book_authors_variance_fields';
  ord?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "book_authors" */
export type Book_Authors_Variance_Order_By = {
  ord?: InputMaybe<Order_By>;
};

/** columns and relationships of "book_availability" */
export type Book_Availability = {
  __typename: 'book_availability';
  available?: Maybe<Scalars['Int']['output']>;
  book_id?: Maybe<Scalars['uuid']['output']>;
  checked_out?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "book_availability" */
export type Book_Availability_Aggregate = {
  __typename: 'book_availability_aggregate';
  aggregate?: Maybe<Book_Availability_Aggregate_Fields>;
  nodes: Array<Book_Availability>;
};

/** aggregate fields of "book_availability" */
export type Book_Availability_Aggregate_Fields = {
  __typename: 'book_availability_aggregate_fields';
  avg?: Maybe<Book_Availability_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Availability_Max_Fields>;
  min?: Maybe<Book_Availability_Min_Fields>;
  stddev?: Maybe<Book_Availability_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Availability_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Availability_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Availability_Sum_Fields>;
  var_pop?: Maybe<Book_Availability_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Availability_Var_Samp_Fields>;
  variance?: Maybe<Book_Availability_Variance_Fields>;
};


/** aggregate fields of "book_availability" */
export type Book_Availability_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Book_Availability_Avg_Fields = {
  __typename: 'book_availability_avg_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "book_availability". All fields are combined with a logical 'AND'. */
export type Book_Availability_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Availability_Bool_Exp>>;
  _not?: InputMaybe<Book_Availability_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Availability_Bool_Exp>>;
  available?: InputMaybe<Int_Comparison_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  checked_out?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Book_Availability_Max_Fields = {
  __typename: 'book_availability_max_fields';
  available?: Maybe<Scalars['Int']['output']>;
  book_id?: Maybe<Scalars['uuid']['output']>;
  checked_out?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Book_Availability_Min_Fields = {
  __typename: 'book_availability_min_fields';
  available?: Maybe<Scalars['Int']['output']>;
  book_id?: Maybe<Scalars['uuid']['output']>;
  checked_out?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "book_availability". */
export type Book_Availability_Order_By = {
  available?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  checked_out?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** select columns of table "book_availability" */
export enum Book_Availability_Select_Column {
  /** column name */
  Available = 'available',
  /** column name */
  BookId = 'book_id',
  /** column name */
  CheckedOut = 'checked_out',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate stddev on columns */
export type Book_Availability_Stddev_Fields = {
  __typename: 'book_availability_stddev_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Book_Availability_Stddev_Pop_Fields = {
  __typename: 'book_availability_stddev_pop_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Book_Availability_Stddev_Samp_Fields = {
  __typename: 'book_availability_stddev_samp_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "book_availability" */
export type Book_Availability_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Availability_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Availability_Stream_Cursor_Value_Input = {
  available?: InputMaybe<Scalars['Int']['input']>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  checked_out?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Book_Availability_Sum_Fields = {
  __typename: 'book_availability_sum_fields';
  available?: Maybe<Scalars['Int']['output']>;
  checked_out?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Book_Availability_Var_Pop_Fields = {
  __typename: 'book_availability_var_pop_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Book_Availability_Var_Samp_Fields = {
  __typename: 'book_availability_var_samp_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Book_Availability_Variance_Fields = {
  __typename: 'book_availability_variance_fields';
  available?: Maybe<Scalars['Float']['output']>;
  checked_out?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "book_categories" */
export type Book_Categories = {
  __typename: 'book_categories';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid']['output'];
  /** An object relationship */
  category: Categories;
  category_id: Scalars['String']['output'];
};

/** aggregated selection of "book_categories" */
export type Book_Categories_Aggregate = {
  __typename: 'book_categories_aggregate';
  aggregate?: Maybe<Book_Categories_Aggregate_Fields>;
  nodes: Array<Book_Categories>;
};

export type Book_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Book_Categories_Aggregate_Bool_Exp_Count>;
};

export type Book_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Book_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "book_categories" */
export type Book_Categories_Aggregate_Fields = {
  __typename: 'book_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Categories_Max_Fields>;
  min?: Maybe<Book_Categories_Min_Fields>;
};


/** aggregate fields of "book_categories" */
export type Book_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "book_categories" */
export type Book_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Categories_Max_Order_By>;
  min?: InputMaybe<Book_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "book_categories" */
export type Book_Categories_Arr_Rel_Insert_Input = {
  data: Array<Book_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Book_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "book_categories". All fields are combined with a logical 'AND'. */
export type Book_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Categories_Bool_Exp>>;
  _not?: InputMaybe<Book_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Categories_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "book_categories" */
export enum Book_Categories_Constraint {
  /** unique or primary key constraint on columns "category_id", "book_id" */
  BookCategoriesPkey = 'book_categories_pkey'
}

/** input type for inserting data into table "book_categories" */
export type Book_Categories_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Book_Categories_Max_Fields = {
  __typename: 'book_categories_max_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  category_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "book_categories" */
export type Book_Categories_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Categories_Min_Fields = {
  __typename: 'book_categories_min_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  category_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "book_categories" */
export type Book_Categories_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "book_categories" */
export type Book_Categories_Mutation_Response = {
  __typename: 'book_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Book_Categories>;
};

/** on_conflict condition type for table "book_categories" */
export type Book_Categories_On_Conflict = {
  constraint: Book_Categories_Constraint;
  update_columns?: Array<Book_Categories_Update_Column>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "book_categories". */
export type Book_Categories_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: book_categories */
export type Book_Categories_Pk_Columns_Input = {
  book_id: Scalars['uuid']['input'];
  category_id: Scalars['String']['input'];
};

/** select columns of table "book_categories" */
export enum Book_Categories_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CategoryId = 'category_id'
}

/** input type for updating data in table "book_categories" */
export type Book_Categories_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  category_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "book_categories" */
export type Book_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Categories_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  category_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "book_categories" */
export enum Book_Categories_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CategoryId = 'category_id'
}

export type Book_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Book_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Book_Categories_Bool_Exp;
};

/** columns and relationships of "book_current_borrowers" */
export type Book_Current_Borrowers = {
  __typename: 'book_current_borrowers';
  book_id?: Maybe<Scalars['uuid']['output']>;
  borrowed_at?: Maybe<Scalars['timestamptz']['output']>;
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  loan_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "book_current_borrowers" */
export type Book_Current_Borrowers_Aggregate = {
  __typename: 'book_current_borrowers_aggregate';
  aggregate?: Maybe<Book_Current_Borrowers_Aggregate_Fields>;
  nodes: Array<Book_Current_Borrowers>;
};

/** aggregate fields of "book_current_borrowers" */
export type Book_Current_Borrowers_Aggregate_Fields = {
  __typename: 'book_current_borrowers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Current_Borrowers_Max_Fields>;
  min?: Maybe<Book_Current_Borrowers_Min_Fields>;
};


/** aggregate fields of "book_current_borrowers" */
export type Book_Current_Borrowers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Current_Borrowers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "book_current_borrowers". All fields are combined with a logical 'AND'. */
export type Book_Current_Borrowers_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Current_Borrowers_Bool_Exp>>;
  _not?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Current_Borrowers_Bool_Exp>>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  borrowed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  due_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  loan_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Book_Current_Borrowers_Max_Fields = {
  __typename: 'book_current_borrowers_max_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  borrowed_at?: Maybe<Scalars['timestamptz']['output']>;
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  loan_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Book_Current_Borrowers_Min_Fields = {
  __typename: 'book_current_borrowers_min_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  borrowed_at?: Maybe<Scalars['timestamptz']['output']>;
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  loan_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** Ordering options when selecting data from "book_current_borrowers". */
export type Book_Current_Borrowers_Order_By = {
  book_id?: InputMaybe<Order_By>;
  borrowed_at?: InputMaybe<Order_By>;
  due_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  loan_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "book_current_borrowers" */
export enum Book_Current_Borrowers_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  BorrowedAt = 'borrowed_at',
  /** column name */
  DueAt = 'due_at',
  /** column name */
  Email = 'email',
  /** column name */
  LoanId = 'loan_id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** Streaming cursor of the table "book_current_borrowers" */
export type Book_Current_Borrowers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Current_Borrowers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Current_Borrowers_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  borrowed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  due_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  loan_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "book_inventory" */
export type Book_Inventory = {
  __typename: 'book_inventory';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid']['output'];
  quantity: Scalars['Int']['output'];
};

/** aggregated selection of "book_inventory" */
export type Book_Inventory_Aggregate = {
  __typename: 'book_inventory_aggregate';
  aggregate?: Maybe<Book_Inventory_Aggregate_Fields>;
  nodes: Array<Book_Inventory>;
};

/** aggregate fields of "book_inventory" */
export type Book_Inventory_Aggregate_Fields = {
  __typename: 'book_inventory_aggregate_fields';
  avg?: Maybe<Book_Inventory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Inventory_Max_Fields>;
  min?: Maybe<Book_Inventory_Min_Fields>;
  stddev?: Maybe<Book_Inventory_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Inventory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Inventory_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Inventory_Sum_Fields>;
  var_pop?: Maybe<Book_Inventory_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Inventory_Var_Samp_Fields>;
  variance?: Maybe<Book_Inventory_Variance_Fields>;
};


/** aggregate fields of "book_inventory" */
export type Book_Inventory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Inventory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Book_Inventory_Avg_Fields = {
  __typename: 'book_inventory_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "book_inventory". All fields are combined with a logical 'AND'. */
export type Book_Inventory_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Inventory_Bool_Exp>>;
  _not?: InputMaybe<Book_Inventory_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Inventory_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "book_inventory" */
export enum Book_Inventory_Constraint {
  /** unique or primary key constraint on columns "book_id" */
  BookInventoryPkey = 'book_inventory_pkey'
}

/** input type for incrementing numeric columns in table "book_inventory" */
export type Book_Inventory_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "book_inventory" */
export type Book_Inventory_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Book_Inventory_Max_Fields = {
  __typename: 'book_inventory_max_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Book_Inventory_Min_Fields = {
  __typename: 'book_inventory_min_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "book_inventory" */
export type Book_Inventory_Mutation_Response = {
  __typename: 'book_inventory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Book_Inventory>;
};

/** input type for inserting object relation for remote table "book_inventory" */
export type Book_Inventory_Obj_Rel_Insert_Input = {
  data: Book_Inventory_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Book_Inventory_On_Conflict>;
};

/** on_conflict condition type for table "book_inventory" */
export type Book_Inventory_On_Conflict = {
  constraint: Book_Inventory_Constraint;
  update_columns?: Array<Book_Inventory_Update_Column>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};

/** Ordering options when selecting data from "book_inventory". */
export type Book_Inventory_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: book_inventory */
export type Book_Inventory_Pk_Columns_Input = {
  book_id: Scalars['uuid']['input'];
};

/** select columns of table "book_inventory" */
export enum Book_Inventory_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "book_inventory" */
export type Book_Inventory_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Book_Inventory_Stddev_Fields = {
  __typename: 'book_inventory_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Book_Inventory_Stddev_Pop_Fields = {
  __typename: 'book_inventory_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Book_Inventory_Stddev_Samp_Fields = {
  __typename: 'book_inventory_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "book_inventory" */
export type Book_Inventory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Inventory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Inventory_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Book_Inventory_Sum_Fields = {
  __typename: 'book_inventory_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "book_inventory" */
export enum Book_Inventory_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Quantity = 'quantity'
}

export type Book_Inventory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Book_Inventory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Book_Inventory_Set_Input>;
  /** filter the rows which have to be updated */
  where: Book_Inventory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Book_Inventory_Var_Pop_Fields = {
  __typename: 'book_inventory_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Book_Inventory_Var_Samp_Fields = {
  __typename: 'book_inventory_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Book_Inventory_Variance_Fields = {
  __typename: 'book_inventory_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "book_loans" */
export type Book_Loans = {
  __typename: 'book_loans';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid']['output'];
  borrowed_at: Scalars['timestamptz']['output'];
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "book_loans" */
export type Book_Loans_Aggregate = {
  __typename: 'book_loans_aggregate';
  aggregate?: Maybe<Book_Loans_Aggregate_Fields>;
  nodes: Array<Book_Loans>;
};

export type Book_Loans_Aggregate_Bool_Exp = {
  count?: InputMaybe<Book_Loans_Aggregate_Bool_Exp_Count>;
};

export type Book_Loans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Book_Loans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Loans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "book_loans" */
export type Book_Loans_Aggregate_Fields = {
  __typename: 'book_loans_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Loans_Max_Fields>;
  min?: Maybe<Book_Loans_Min_Fields>;
};


/** aggregate fields of "book_loans" */
export type Book_Loans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Loans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "book_loans" */
export type Book_Loans_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Loans_Max_Order_By>;
  min?: InputMaybe<Book_Loans_Min_Order_By>;
};

/** input type for inserting array relation for remote table "book_loans" */
export type Book_Loans_Arr_Rel_Insert_Input = {
  data: Array<Book_Loans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Book_Loans_On_Conflict>;
};

/** Boolean expression to filter rows from the table "book_loans". All fields are combined with a logical 'AND'. */
export type Book_Loans_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Loans_Bool_Exp>>;
  _not?: InputMaybe<Book_Loans_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Loans_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  borrowed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  due_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  returned_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "book_loans" */
export enum Book_Loans_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookLoansPkey = 'book_loans_pkey',
  /** unique or primary key constraint on columns "user_id", "book_id" */
  UniqActiveLoanPerUserBook = 'uniq_active_loan_per_user_book'
}

/** input type for inserting data into table "book_loans" */
export type Book_Loans_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  borrowed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  due_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  returned_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Book_Loans_Max_Fields = {
  __typename: 'book_loans_max_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  borrowed_at?: Maybe<Scalars['timestamptz']['output']>;
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "book_loans" */
export type Book_Loans_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  borrowed_at?: InputMaybe<Order_By>;
  due_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  returned_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Loans_Min_Fields = {
  __typename: 'book_loans_min_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  borrowed_at?: Maybe<Scalars['timestamptz']['output']>;
  due_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  returned_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "book_loans" */
export type Book_Loans_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  borrowed_at?: InputMaybe<Order_By>;
  due_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  returned_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "book_loans" */
export type Book_Loans_Mutation_Response = {
  __typename: 'book_loans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Book_Loans>;
};

/** on_conflict condition type for table "book_loans" */
export type Book_Loans_On_Conflict = {
  constraint: Book_Loans_Constraint;
  update_columns?: Array<Book_Loans_Update_Column>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};

/** Ordering options when selecting data from "book_loans". */
export type Book_Loans_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  borrowed_at?: InputMaybe<Order_By>;
  due_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  returned_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: book_loans */
export type Book_Loans_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "book_loans" */
export enum Book_Loans_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  BorrowedAt = 'borrowed_at',
  /** column name */
  DueAt = 'due_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReturnedAt = 'returned_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "book_loans" */
export type Book_Loans_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  borrowed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  due_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  returned_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "book_loans" */
export type Book_Loans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Book_Loans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Book_Loans_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  borrowed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  due_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  returned_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "book_loans" */
export enum Book_Loans_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  BorrowedAt = 'borrowed_at',
  /** column name */
  DueAt = 'due_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReturnedAt = 'returned_at',
  /** column name */
  UserId = 'user_id'
}

export type Book_Loans_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Book_Loans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Book_Loans_Bool_Exp;
};

/** columns and relationships of "books" */
export type Books = {
  __typename: 'books';
  access_info?: Maybe<Scalars['jsonb']['output']>;
  average_rating?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  book_authors: Array<Book_Authors>;
  /** An aggregate relationship */
  book_authors_aggregate: Book_Authors_Aggregate;
  /** An array relationship */
  book_categories: Array<Book_Categories>;
  /** An aggregate relationship */
  book_categories_aggregate: Book_Categories_Aggregate;
  /** An object relationship */
  book_inventory?: Maybe<Book_Inventory>;
  /** An array relationship */
  book_loans: Array<Book_Loans>;
  /** An aggregate relationship */
  book_loans_aggregate: Book_Loans_Aggregate;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  industry_identifiers?: Maybe<Scalars['jsonb']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  is_fiction?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Scalars['jsonb']['output']>;
  sale_info?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
};


/** columns and relationships of "books" */
export type BooksAccess_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books" */
export type BooksBook_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBook_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBook_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBook_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBook_LoansArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBook_Loans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksIndustry_IdentifiersArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books" */
export type BooksRawArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books" */
export type BooksSale_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books" */
export type BooksUser_BooksArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksUser_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};

/** aggregated selection of "books" */
export type Books_Aggregate = {
  __typename: 'books_aggregate';
  aggregate?: Maybe<Books_Aggregate_Fields>;
  nodes: Array<Books>;
};

/** aggregate fields of "books" */
export type Books_Aggregate_Fields = {
  __typename: 'books_aggregate_fields';
  avg?: Maybe<Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Books_Max_Fields>;
  min?: Maybe<Books_Min_Fields>;
  stddev?: Maybe<Books_Stddev_Fields>;
  stddev_pop?: Maybe<Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Books_Stddev_Samp_Fields>;
  sum?: Maybe<Books_Sum_Fields>;
  var_pop?: Maybe<Books_Var_Pop_Fields>;
  var_samp?: Maybe<Books_Var_Samp_Fields>;
  variance?: Maybe<Books_Variance_Fields>;
};


/** aggregate fields of "books" */
export type Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Books_Append_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Books_Avg_Fields = {
  __typename: 'books_avg_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: InputMaybe<Array<Books_Bool_Exp>>;
  _not?: InputMaybe<Books_Bool_Exp>;
  _or?: InputMaybe<Array<Books_Bool_Exp>>;
  access_info?: InputMaybe<Jsonb_Comparison_Exp>;
  average_rating?: InputMaybe<Numeric_Comparison_Exp>;
  book_authors?: InputMaybe<Book_Authors_Bool_Exp>;
  book_authors_aggregate?: InputMaybe<Book_Authors_Aggregate_Bool_Exp>;
  book_categories?: InputMaybe<Book_Categories_Bool_Exp>;
  book_categories_aggregate?: InputMaybe<Book_Categories_Aggregate_Bool_Exp>;
  book_inventory?: InputMaybe<Book_Inventory_Bool_Exp>;
  book_loans?: InputMaybe<Book_Loans_Bool_Exp>;
  book_loans_aggregate?: InputMaybe<Book_Loans_Aggregate_Bool_Exp>;
  canonical_volume_link?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  google_volume_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  industry_identifiers?: InputMaybe<Jsonb_Comparison_Exp>;
  info_link?: InputMaybe<String_Comparison_Exp>;
  is_fiction?: InputMaybe<Boolean_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  page_count?: InputMaybe<Int_Comparison_Exp>;
  preview_link?: InputMaybe<String_Comparison_Exp>;
  print_type?: InputMaybe<String_Comparison_Exp>;
  published_date?: InputMaybe<String_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  ratings_count?: InputMaybe<Int_Comparison_Exp>;
  raw?: InputMaybe<Jsonb_Comparison_Exp>;
  sale_info?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "books" */
export enum Books_Constraint {
  /** unique or primary key constraint on columns "google_volume_id" */
  BooksGoogleVolumeIdKey = 'books_google_volume_id_key',
  /** unique or primary key constraint on columns "id" */
  BooksPkey = 'books_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Books_Delete_At_Path_Input = {
  access_info?: InputMaybe<Array<Scalars['String']['input']>>;
  industry_identifiers?: InputMaybe<Array<Scalars['String']['input']>>;
  raw?: InputMaybe<Array<Scalars['String']['input']>>;
  sale_info?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Books_Delete_Elem_Input = {
  access_info?: InputMaybe<Scalars['Int']['input']>;
  industry_identifiers?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['Int']['input']>;
  sale_info?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Books_Delete_Key_Input = {
  access_info?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['String']['input']>;
  raw?: InputMaybe<Scalars['String']['input']>;
  sale_info?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "books" */
export type Books_Inc_Input = {
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "books" */
export type Books_Insert_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  book_authors?: InputMaybe<Book_Authors_Arr_Rel_Insert_Input>;
  book_categories?: InputMaybe<Book_Categories_Arr_Rel_Insert_Input>;
  book_inventory?: InputMaybe<Book_Inventory_Obj_Rel_Insert_Input>;
  book_loans?: InputMaybe<Book_Loans_Arr_Rel_Insert_Input>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_books?: InputMaybe<User_Books_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Books_Max_Fields = {
  __typename: 'books_max_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Books_Min_Fields = {
  __typename: 'books_min_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "books" */
export type Books_Mutation_Response = {
  __typename: 'books_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Books>;
};

/** input type for inserting object relation for remote table "books" */
export type Books_Obj_Rel_Insert_Input = {
  data: Books_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Books_On_Conflict>;
};

/** on_conflict condition type for table "books" */
export type Books_On_Conflict = {
  constraint: Books_Constraint;
  update_columns?: Array<Books_Update_Column>;
  where?: InputMaybe<Books_Bool_Exp>;
};

/** Ordering options when selecting data from "books". */
export type Books_Order_By = {
  access_info?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  book_authors_aggregate?: InputMaybe<Book_Authors_Aggregate_Order_By>;
  book_categories_aggregate?: InputMaybe<Book_Categories_Aggregate_Order_By>;
  book_inventory?: InputMaybe<Book_Inventory_Order_By>;
  book_loans_aggregate?: InputMaybe<Book_Loans_Aggregate_Order_By>;
  canonical_volume_link?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  google_volume_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_thumbnail_url?: InputMaybe<Order_By>;
  industry_identifiers?: InputMaybe<Order_By>;
  info_link?: InputMaybe<Order_By>;
  is_fiction?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  page_count?: InputMaybe<Order_By>;
  preview_link?: InputMaybe<Order_By>;
  print_type?: InputMaybe<Order_By>;
  published_date?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  raw?: InputMaybe<Order_By>;
  sale_info?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
};

/** primary key columns input for table: books */
export type Books_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Books_Prepend_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "books" */
export enum Books_Select_Column {
  /** column name */
  AccessInfo = 'access_info',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  CanonicalVolumeLink = 'canonical_volume_link',
  /** column name */
  Description = 'description',
  /** column name */
  GoogleVolumeId = 'google_volume_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageThumbnailUrl = 'image_thumbnail_url',
  /** column name */
  IndustryIdentifiers = 'industry_identifiers',
  /** column name */
  InfoLink = 'info_link',
  /** column name */
  IsFiction = 'is_fiction',
  /** column name */
  Language = 'language',
  /** column name */
  PageCount = 'page_count',
  /** column name */
  PreviewLink = 'preview_link',
  /** column name */
  PrintType = 'print_type',
  /** column name */
  PublishedDate = 'published_date',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  RatingsCount = 'ratings_count',
  /** column name */
  Raw = 'raw',
  /** column name */
  SaleInfo = 'sale_info',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "books" */
export type Books_Set_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Books_Stddev_Fields = {
  __typename: 'books_stddev_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Books_Stddev_Pop_Fields = {
  __typename: 'books_stddev_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Books_Stddev_Samp_Fields = {
  __typename: 'books_stddev_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "books" */
export type Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Books_Stream_Cursor_Value_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Books_Sum_Fields = {
  __typename: 'books_sum_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "books" */
export enum Books_Update_Column {
  /** column name */
  AccessInfo = 'access_info',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  CanonicalVolumeLink = 'canonical_volume_link',
  /** column name */
  Description = 'description',
  /** column name */
  GoogleVolumeId = 'google_volume_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageThumbnailUrl = 'image_thumbnail_url',
  /** column name */
  IndustryIdentifiers = 'industry_identifiers',
  /** column name */
  InfoLink = 'info_link',
  /** column name */
  IsFiction = 'is_fiction',
  /** column name */
  Language = 'language',
  /** column name */
  PageCount = 'page_count',
  /** column name */
  PreviewLink = 'preview_link',
  /** column name */
  PrintType = 'print_type',
  /** column name */
  PublishedDate = 'published_date',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  RatingsCount = 'ratings_count',
  /** column name */
  Raw = 'raw',
  /** column name */
  SaleInfo = 'sale_info',
  /** column name */
  Title = 'title'
}

export type Books_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Books_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Books_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Books_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Books_Set_Input>;
  /** filter the rows which have to be updated */
  where: Books_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Books_Var_Pop_Fields = {
  __typename: 'books_var_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Books_Var_Samp_Fields = {
  __typename: 'books_var_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Books_Variance_Fields = {
  __typename: 'books_variance_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "books_with_inferred_genre" */
export type Books_With_Inferred_Genre = {
  __typename: 'books_with_inferred_genre';
  access_info?: Maybe<Scalars['jsonb']['output']>;
  average_rating?: Maybe<Scalars['numeric']['output']>;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  industry_identifiers?: Maybe<Scalars['jsonb']['output']>;
  inferred_is_fiction?: Maybe<Scalars['Boolean']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  is_fiction?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Scalars['jsonb']['output']>;
  sale_info?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "books_with_inferred_genre" */
export type Books_With_Inferred_GenreAccess_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books_with_inferred_genre" */
export type Books_With_Inferred_GenreIndustry_IdentifiersArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books_with_inferred_genre" */
export type Books_With_Inferred_GenreRawArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "books_with_inferred_genre" */
export type Books_With_Inferred_GenreSale_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Aggregate = {
  __typename: 'books_with_inferred_genre_aggregate';
  aggregate?: Maybe<Books_With_Inferred_Genre_Aggregate_Fields>;
  nodes: Array<Books_With_Inferred_Genre>;
};

/** aggregate fields of "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Aggregate_Fields = {
  __typename: 'books_with_inferred_genre_aggregate_fields';
  avg?: Maybe<Books_With_Inferred_Genre_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Books_With_Inferred_Genre_Max_Fields>;
  min?: Maybe<Books_With_Inferred_Genre_Min_Fields>;
  stddev?: Maybe<Books_With_Inferred_Genre_Stddev_Fields>;
  stddev_pop?: Maybe<Books_With_Inferred_Genre_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Books_With_Inferred_Genre_Stddev_Samp_Fields>;
  sum?: Maybe<Books_With_Inferred_Genre_Sum_Fields>;
  var_pop?: Maybe<Books_With_Inferred_Genre_Var_Pop_Fields>;
  var_samp?: Maybe<Books_With_Inferred_Genre_Var_Samp_Fields>;
  variance?: Maybe<Books_With_Inferred_Genre_Variance_Fields>;
};


/** aggregate fields of "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Books_With_Inferred_Genre_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Books_With_Inferred_Genre_Append_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Books_With_Inferred_Genre_Avg_Fields = {
  __typename: 'books_with_inferred_genre_avg_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "books_with_inferred_genre". All fields are combined with a logical 'AND'. */
export type Books_With_Inferred_Genre_Bool_Exp = {
  _and?: InputMaybe<Array<Books_With_Inferred_Genre_Bool_Exp>>;
  _not?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
  _or?: InputMaybe<Array<Books_With_Inferred_Genre_Bool_Exp>>;
  access_info?: InputMaybe<Jsonb_Comparison_Exp>;
  average_rating?: InputMaybe<Numeric_Comparison_Exp>;
  canonical_volume_link?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  google_volume_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  industry_identifiers?: InputMaybe<Jsonb_Comparison_Exp>;
  inferred_is_fiction?: InputMaybe<Boolean_Comparison_Exp>;
  info_link?: InputMaybe<String_Comparison_Exp>;
  is_fiction?: InputMaybe<Boolean_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  page_count?: InputMaybe<Int_Comparison_Exp>;
  preview_link?: InputMaybe<String_Comparison_Exp>;
  print_type?: InputMaybe<String_Comparison_Exp>;
  published_date?: InputMaybe<String_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  ratings_count?: InputMaybe<Int_Comparison_Exp>;
  raw?: InputMaybe<Jsonb_Comparison_Exp>;
  sale_info?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Books_With_Inferred_Genre_Delete_At_Path_Input = {
  access_info?: InputMaybe<Array<Scalars['String']['input']>>;
  industry_identifiers?: InputMaybe<Array<Scalars['String']['input']>>;
  raw?: InputMaybe<Array<Scalars['String']['input']>>;
  sale_info?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Books_With_Inferred_Genre_Delete_Elem_Input = {
  access_info?: InputMaybe<Scalars['Int']['input']>;
  industry_identifiers?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['Int']['input']>;
  sale_info?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Books_With_Inferred_Genre_Delete_Key_Input = {
  access_info?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['String']['input']>;
  raw?: InputMaybe<Scalars['String']['input']>;
  sale_info?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Inc_Input = {
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Insert_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  inferred_is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Books_With_Inferred_Genre_Max_Fields = {
  __typename: 'books_with_inferred_genre_max_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Books_With_Inferred_Genre_Min_Fields = {
  __typename: 'books_with_inferred_genre_min_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  canonical_volume_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_volume_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_thumbnail_url?: Maybe<Scalars['String']['output']>;
  info_link?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  print_type?: Maybe<Scalars['String']['output']>;
  published_date?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Mutation_Response = {
  __typename: 'books_with_inferred_genre_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Books_With_Inferred_Genre>;
};

/** Ordering options when selecting data from "books_with_inferred_genre". */
export type Books_With_Inferred_Genre_Order_By = {
  access_info?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  canonical_volume_link?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  google_volume_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_thumbnail_url?: InputMaybe<Order_By>;
  industry_identifiers?: InputMaybe<Order_By>;
  inferred_is_fiction?: InputMaybe<Order_By>;
  info_link?: InputMaybe<Order_By>;
  is_fiction?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  page_count?: InputMaybe<Order_By>;
  preview_link?: InputMaybe<Order_By>;
  print_type?: InputMaybe<Order_By>;
  published_date?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  raw?: InputMaybe<Order_By>;
  sale_info?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Books_With_Inferred_Genre_Prepend_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "books_with_inferred_genre" */
export enum Books_With_Inferred_Genre_Select_Column {
  /** column name */
  AccessInfo = 'access_info',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  CanonicalVolumeLink = 'canonical_volume_link',
  /** column name */
  Description = 'description',
  /** column name */
  GoogleVolumeId = 'google_volume_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageThumbnailUrl = 'image_thumbnail_url',
  /** column name */
  IndustryIdentifiers = 'industry_identifiers',
  /** column name */
  InferredIsFiction = 'inferred_is_fiction',
  /** column name */
  InfoLink = 'info_link',
  /** column name */
  IsFiction = 'is_fiction',
  /** column name */
  Language = 'language',
  /** column name */
  PageCount = 'page_count',
  /** column name */
  PreviewLink = 'preview_link',
  /** column name */
  PrintType = 'print_type',
  /** column name */
  PublishedDate = 'published_date',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  RatingsCount = 'ratings_count',
  /** column name */
  Raw = 'raw',
  /** column name */
  SaleInfo = 'sale_info',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Set_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  inferred_is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Books_With_Inferred_Genre_Stddev_Fields = {
  __typename: 'books_with_inferred_genre_stddev_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Books_With_Inferred_Genre_Stddev_Pop_Fields = {
  __typename: 'books_with_inferred_genre_stddev_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Books_With_Inferred_Genre_Stddev_Samp_Fields = {
  __typename: 'books_with_inferred_genre_stddev_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "books_with_inferred_genre" */
export type Books_With_Inferred_Genre_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Books_With_Inferred_Genre_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Books_With_Inferred_Genre_Stream_Cursor_Value_Input = {
  access_info?: InputMaybe<Scalars['jsonb']['input']>;
  average_rating?: InputMaybe<Scalars['numeric']['input']>;
  canonical_volume_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_volume_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  industry_identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  inferred_is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  info_link?: InputMaybe<Scalars['String']['input']>;
  is_fiction?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  preview_link?: InputMaybe<Scalars['String']['input']>;
  print_type?: InputMaybe<Scalars['String']['input']>;
  published_date?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['jsonb']['input']>;
  sale_info?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Books_With_Inferred_Genre_Sum_Fields = {
  __typename: 'books_with_inferred_genre_sum_fields';
  average_rating?: Maybe<Scalars['numeric']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
};

export type Books_With_Inferred_Genre_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Books_With_Inferred_Genre_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Books_With_Inferred_Genre_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Books_With_Inferred_Genre_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Books_With_Inferred_Genre_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Books_With_Inferred_Genre_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Books_With_Inferred_Genre_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Books_With_Inferred_Genre_Set_Input>;
  /** filter the rows which have to be updated */
  where: Books_With_Inferred_Genre_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Books_With_Inferred_Genre_Var_Pop_Fields = {
  __typename: 'books_with_inferred_genre_var_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Books_With_Inferred_Genre_Var_Samp_Fields = {
  __typename: 'books_with_inferred_genre_var_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Books_With_Inferred_Genre_Variance_Fields = {
  __typename: 'books_with_inferred_genre_variance_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  page_count?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename: 'categories';
  /** An array relationship */
  book_categories: Array<Book_Categories>;
  /** An aggregate relationship */
  book_categories_aggregate: Book_Categories_Aggregate;
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};


/** columns and relationships of "categories" */
export type CategoriesBook_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesBook_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename: 'categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  book_categories?: InputMaybe<Book_Categories_Bool_Exp>;
  book_categories_aggregate?: InputMaybe<Book_Categories_Aggregate_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesNewPkey = 'categories_new_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  book_categories?: InputMaybe<Book_Categories_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename: 'categories_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename: 'categories_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  book_categories_aggregate?: InputMaybe<Book_Categories_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "authors" */
  delete_authors?: Maybe<Authors_Mutation_Response>;
  /** delete single row from the table: "authors" */
  delete_authors_by_pk?: Maybe<Authors>;
  /** delete data from the table: "book_authors" */
  delete_book_authors?: Maybe<Book_Authors_Mutation_Response>;
  /** delete single row from the table: "book_authors" */
  delete_book_authors_by_pk?: Maybe<Book_Authors>;
  /** delete data from the table: "book_categories" */
  delete_book_categories?: Maybe<Book_Categories_Mutation_Response>;
  /** delete single row from the table: "book_categories" */
  delete_book_categories_by_pk?: Maybe<Book_Categories>;
  /** delete data from the table: "book_inventory" */
  delete_book_inventory?: Maybe<Book_Inventory_Mutation_Response>;
  /** delete single row from the table: "book_inventory" */
  delete_book_inventory_by_pk?: Maybe<Book_Inventory>;
  /** delete data from the table: "book_loans" */
  delete_book_loans?: Maybe<Book_Loans_Mutation_Response>;
  /** delete single row from the table: "book_loans" */
  delete_book_loans_by_pk?: Maybe<Book_Loans>;
  /** delete data from the table: "books" */
  delete_books?: Maybe<Books_Mutation_Response>;
  /** delete single row from the table: "books" */
  delete_books_by_pk?: Maybe<Books>;
  /** delete data from the table: "books_with_inferred_genre" */
  delete_books_with_inferred_genre?: Maybe<Books_With_Inferred_Genre_Mutation_Response>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "user_books" */
  delete_user_books?: Maybe<User_Books_Mutation_Response>;
  /** delete single row from the table: "user_books" */
  delete_user_books_by_pk?: Maybe<User_Books>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "authors" */
  insert_authors?: Maybe<Authors_Mutation_Response>;
  /** insert a single row into the table: "authors" */
  insert_authors_one?: Maybe<Authors>;
  /** insert data into the table: "book_authors" */
  insert_book_authors?: Maybe<Book_Authors_Mutation_Response>;
  /** insert a single row into the table: "book_authors" */
  insert_book_authors_one?: Maybe<Book_Authors>;
  /** insert data into the table: "book_categories" */
  insert_book_categories?: Maybe<Book_Categories_Mutation_Response>;
  /** insert a single row into the table: "book_categories" */
  insert_book_categories_one?: Maybe<Book_Categories>;
  /** insert data into the table: "book_inventory" */
  insert_book_inventory?: Maybe<Book_Inventory_Mutation_Response>;
  /** insert a single row into the table: "book_inventory" */
  insert_book_inventory_one?: Maybe<Book_Inventory>;
  /** insert data into the table: "book_loans" */
  insert_book_loans?: Maybe<Book_Loans_Mutation_Response>;
  /** insert a single row into the table: "book_loans" */
  insert_book_loans_one?: Maybe<Book_Loans>;
  /** insert data into the table: "books" */
  insert_books?: Maybe<Books_Mutation_Response>;
  /** insert a single row into the table: "books" */
  insert_books_one?: Maybe<Books>;
  /** insert data into the table: "books_with_inferred_genre" */
  insert_books_with_inferred_genre?: Maybe<Books_With_Inferred_Genre_Mutation_Response>;
  /** insert a single row into the table: "books_with_inferred_genre" */
  insert_books_with_inferred_genre_one?: Maybe<Books_With_Inferred_Genre>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "user_books" */
  insert_user_books?: Maybe<User_Books_Mutation_Response>;
  /** insert a single row into the table: "user_books" */
  insert_user_books_one?: Maybe<User_Books>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "authors" */
  update_authors?: Maybe<Authors_Mutation_Response>;
  /** update single row of the table: "authors" */
  update_authors_by_pk?: Maybe<Authors>;
  /** update multiples rows of table: "authors" */
  update_authors_many?: Maybe<Array<Maybe<Authors_Mutation_Response>>>;
  /** update data of the table: "book_authors" */
  update_book_authors?: Maybe<Book_Authors_Mutation_Response>;
  /** update single row of the table: "book_authors" */
  update_book_authors_by_pk?: Maybe<Book_Authors>;
  /** update multiples rows of table: "book_authors" */
  update_book_authors_many?: Maybe<Array<Maybe<Book_Authors_Mutation_Response>>>;
  /** update data of the table: "book_categories" */
  update_book_categories?: Maybe<Book_Categories_Mutation_Response>;
  /** update single row of the table: "book_categories" */
  update_book_categories_by_pk?: Maybe<Book_Categories>;
  /** update multiples rows of table: "book_categories" */
  update_book_categories_many?: Maybe<Array<Maybe<Book_Categories_Mutation_Response>>>;
  /** update data of the table: "book_inventory" */
  update_book_inventory?: Maybe<Book_Inventory_Mutation_Response>;
  /** update single row of the table: "book_inventory" */
  update_book_inventory_by_pk?: Maybe<Book_Inventory>;
  /** update multiples rows of table: "book_inventory" */
  update_book_inventory_many?: Maybe<Array<Maybe<Book_Inventory_Mutation_Response>>>;
  /** update data of the table: "book_loans" */
  update_book_loans?: Maybe<Book_Loans_Mutation_Response>;
  /** update single row of the table: "book_loans" */
  update_book_loans_by_pk?: Maybe<Book_Loans>;
  /** update multiples rows of table: "book_loans" */
  update_book_loans_many?: Maybe<Array<Maybe<Book_Loans_Mutation_Response>>>;
  /** update data of the table: "books" */
  update_books?: Maybe<Books_Mutation_Response>;
  /** update single row of the table: "books" */
  update_books_by_pk?: Maybe<Books>;
  /** update multiples rows of table: "books" */
  update_books_many?: Maybe<Array<Maybe<Books_Mutation_Response>>>;
  /** update data of the table: "books_with_inferred_genre" */
  update_books_with_inferred_genre?: Maybe<Books_With_Inferred_Genre_Mutation_Response>;
  /** update multiples rows of table: "books_with_inferred_genre" */
  update_books_with_inferred_genre_many?: Maybe<Array<Maybe<Books_With_Inferred_Genre_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "user_books" */
  update_user_books?: Maybe<User_Books_Mutation_Response>;
  /** update single row of the table: "user_books" */
  update_user_books_by_pk?: Maybe<User_Books>;
  /** update multiples rows of table: "user_books" */
  update_user_books_many?: Maybe<Array<Maybe<User_Books_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorsArgs = {
  where: Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Authors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Book_AuthorsArgs = {
  where: Book_Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_Authors_By_PkArgs = {
  author_id: Scalars['uuid']['input'];
  book_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Book_CategoriesArgs = {
  where: Book_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_Categories_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
  category_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Book_InventoryArgs = {
  where: Book_Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_Inventory_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Book_LoansArgs = {
  where: Book_Loans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_Loans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BooksArgs = {
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Books_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Books_With_Inferred_GenreArgs = {
  where: Books_With_Inferred_Genre_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_BooksArgs = {
  where: User_Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Books_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorsArgs = {
  objects: Array<Authors_Insert_Input>;
  on_conflict?: InputMaybe<Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Authors_OneArgs = {
  object: Authors_Insert_Input;
  on_conflict?: InputMaybe<Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_AuthorsArgs = {
  objects: Array<Book_Authors_Insert_Input>;
  on_conflict?: InputMaybe<Book_Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_Authors_OneArgs = {
  object: Book_Authors_Insert_Input;
  on_conflict?: InputMaybe<Book_Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_CategoriesArgs = {
  objects: Array<Book_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Book_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_Categories_OneArgs = {
  object: Book_Categories_Insert_Input;
  on_conflict?: InputMaybe<Book_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_InventoryArgs = {
  objects: Array<Book_Inventory_Insert_Input>;
  on_conflict?: InputMaybe<Book_Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_Inventory_OneArgs = {
  object: Book_Inventory_Insert_Input;
  on_conflict?: InputMaybe<Book_Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_LoansArgs = {
  objects: Array<Book_Loans_Insert_Input>;
  on_conflict?: InputMaybe<Book_Loans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_Loans_OneArgs = {
  object: Book_Loans_Insert_Input;
  on_conflict?: InputMaybe<Book_Loans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BooksArgs = {
  objects: Array<Books_Insert_Input>;
  on_conflict?: InputMaybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Books_OneArgs = {
  object: Books_Insert_Input;
  on_conflict?: InputMaybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Books_With_Inferred_GenreArgs = {
  objects: Array<Books_With_Inferred_Genre_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Books_With_Inferred_Genre_OneArgs = {
  object: Books_With_Inferred_Genre_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_BooksArgs = {
  objects: Array<User_Books_Insert_Input>;
  on_conflict?: InputMaybe<User_Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Books_OneArgs = {
  object: User_Books_Insert_Input;
  on_conflict?: InputMaybe<User_Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorsArgs = {
  _set?: InputMaybe<Authors_Set_Input>;
  where: Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Authors_By_PkArgs = {
  _set?: InputMaybe<Authors_Set_Input>;
  pk_columns: Authors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Authors_ManyArgs = {
  updates: Array<Authors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Book_AuthorsArgs = {
  _inc?: InputMaybe<Book_Authors_Inc_Input>;
  _set?: InputMaybe<Book_Authors_Set_Input>;
  where: Book_Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Authors_By_PkArgs = {
  _inc?: InputMaybe<Book_Authors_Inc_Input>;
  _set?: InputMaybe<Book_Authors_Set_Input>;
  pk_columns: Book_Authors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Authors_ManyArgs = {
  updates: Array<Book_Authors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Book_CategoriesArgs = {
  _set?: InputMaybe<Book_Categories_Set_Input>;
  where: Book_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Categories_By_PkArgs = {
  _set?: InputMaybe<Book_Categories_Set_Input>;
  pk_columns: Book_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Categories_ManyArgs = {
  updates: Array<Book_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Book_InventoryArgs = {
  _inc?: InputMaybe<Book_Inventory_Inc_Input>;
  _set?: InputMaybe<Book_Inventory_Set_Input>;
  where: Book_Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Inventory_By_PkArgs = {
  _inc?: InputMaybe<Book_Inventory_Inc_Input>;
  _set?: InputMaybe<Book_Inventory_Set_Input>;
  pk_columns: Book_Inventory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Inventory_ManyArgs = {
  updates: Array<Book_Inventory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Book_LoansArgs = {
  _set?: InputMaybe<Book_Loans_Set_Input>;
  where: Book_Loans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Loans_By_PkArgs = {
  _set?: InputMaybe<Book_Loans_Set_Input>;
  pk_columns: Book_Loans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Book_Loans_ManyArgs = {
  updates: Array<Book_Loans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BooksArgs = {
  _append?: InputMaybe<Books_Append_Input>;
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  _inc?: InputMaybe<Books_Inc_Input>;
  _prepend?: InputMaybe<Books_Prepend_Input>;
  _set?: InputMaybe<Books_Set_Input>;
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Books_By_PkArgs = {
  _append?: InputMaybe<Books_Append_Input>;
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  _inc?: InputMaybe<Books_Inc_Input>;
  _prepend?: InputMaybe<Books_Prepend_Input>;
  _set?: InputMaybe<Books_Set_Input>;
  pk_columns: Books_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Books_ManyArgs = {
  updates: Array<Books_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Books_With_Inferred_GenreArgs = {
  _append?: InputMaybe<Books_With_Inferred_Genre_Append_Input>;
  _delete_at_path?: InputMaybe<Books_With_Inferred_Genre_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Books_With_Inferred_Genre_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Books_With_Inferred_Genre_Delete_Key_Input>;
  _inc?: InputMaybe<Books_With_Inferred_Genre_Inc_Input>;
  _prepend?: InputMaybe<Books_With_Inferred_Genre_Prepend_Input>;
  _set?: InputMaybe<Books_With_Inferred_Genre_Set_Input>;
  where: Books_With_Inferred_Genre_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Books_With_Inferred_Genre_ManyArgs = {
  updates: Array<Books_With_Inferred_Genre_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_BooksArgs = {
  _set?: InputMaybe<User_Books_Set_Input>;
  where: User_Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Books_By_PkArgs = {
  _set?: InputMaybe<User_Books_Set_Input>;
  pk_columns: User_Books_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Books_ManyArgs = {
  updates: Array<User_Books_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename: 'query_root';
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** An array relationship */
  book_authors: Array<Book_Authors>;
  /** An aggregate relationship */
  book_authors_aggregate: Book_Authors_Aggregate;
  /** fetch data from the table: "book_authors" using primary key columns */
  book_authors_by_pk?: Maybe<Book_Authors>;
  /** fetch data from the table: "book_availability" */
  book_availability: Array<Book_Availability>;
  /** fetch aggregated fields from the table: "book_availability" */
  book_availability_aggregate: Book_Availability_Aggregate;
  /** An array relationship */
  book_categories: Array<Book_Categories>;
  /** An aggregate relationship */
  book_categories_aggregate: Book_Categories_Aggregate;
  /** fetch data from the table: "book_categories" using primary key columns */
  book_categories_by_pk?: Maybe<Book_Categories>;
  /** fetch data from the table: "book_current_borrowers" */
  book_current_borrowers: Array<Book_Current_Borrowers>;
  /** fetch aggregated fields from the table: "book_current_borrowers" */
  book_current_borrowers_aggregate: Book_Current_Borrowers_Aggregate;
  /** fetch data from the table: "book_inventory" */
  book_inventory: Array<Book_Inventory>;
  /** fetch aggregated fields from the table: "book_inventory" */
  book_inventory_aggregate: Book_Inventory_Aggregate;
  /** fetch data from the table: "book_inventory" using primary key columns */
  book_inventory_by_pk?: Maybe<Book_Inventory>;
  /** An array relationship */
  book_loans: Array<Book_Loans>;
  /** An aggregate relationship */
  book_loans_aggregate: Book_Loans_Aggregate;
  /** fetch data from the table: "book_loans" using primary key columns */
  book_loans_by_pk?: Maybe<Book_Loans>;
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table: "books_with_inferred_genre" */
  books_with_inferred_genre: Array<Books_With_Inferred_Genre>;
  /** fetch aggregated fields from the table: "books_with_inferred_genre" */
  books_with_inferred_genre_aggregate: Books_With_Inferred_Genre_Aggregate;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** fetch data from the table: "user_books" using primary key columns */
  user_books_by_pk?: Maybe<User_Books>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuthorsArgs = {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
};


export type Query_RootAuthors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
};


export type Query_RootAuthors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBook_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


export type Query_RootBook_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


export type Query_RootBook_Authors_By_PkArgs = {
  author_id: Scalars['uuid']['input'];
  book_id: Scalars['uuid']['input'];
};


export type Query_RootBook_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Book_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Availability_Order_By>>;
  where?: InputMaybe<Book_Availability_Bool_Exp>;
};


export type Query_RootBook_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Availability_Order_By>>;
  where?: InputMaybe<Book_Availability_Bool_Exp>;
};


export type Query_RootBook_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


export type Query_RootBook_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


export type Query_RootBook_Categories_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
  category_id: Scalars['String']['input'];
};


export type Query_RootBook_Current_BorrowersArgs = {
  distinct_on?: InputMaybe<Array<Book_Current_Borrowers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Current_Borrowers_Order_By>>;
  where?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
};


export type Query_RootBook_Current_Borrowers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Current_Borrowers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Current_Borrowers_Order_By>>;
  where?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
};


export type Query_RootBook_InventoryArgs = {
  distinct_on?: InputMaybe<Array<Book_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Inventory_Order_By>>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};


export type Query_RootBook_Inventory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Inventory_Order_By>>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};


export type Query_RootBook_Inventory_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
};


export type Query_RootBook_LoansArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


export type Query_RootBook_Loans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


export type Query_RootBook_Loans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Query_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Query_RootBooks_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooks_With_Inferred_GenreArgs = {
  distinct_on?: InputMaybe<Array<Books_With_Inferred_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_With_Inferred_Genre_Order_By>>;
  where?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
};


export type Query_RootBooks_With_Inferred_Genre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_With_Inferred_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_With_Inferred_Genre_Order_By>>;
  where?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUser_BooksArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


export type Query_RootUser_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


export type Query_RootUser_Books_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table in a streaming manner: "authors" */
  authors_stream: Array<Authors>;
  /** An array relationship */
  book_authors: Array<Book_Authors>;
  /** An aggregate relationship */
  book_authors_aggregate: Book_Authors_Aggregate;
  /** fetch data from the table: "book_authors" using primary key columns */
  book_authors_by_pk?: Maybe<Book_Authors>;
  /** fetch data from the table in a streaming manner: "book_authors" */
  book_authors_stream: Array<Book_Authors>;
  /** fetch data from the table: "book_availability" */
  book_availability: Array<Book_Availability>;
  /** fetch aggregated fields from the table: "book_availability" */
  book_availability_aggregate: Book_Availability_Aggregate;
  /** fetch data from the table in a streaming manner: "book_availability" */
  book_availability_stream: Array<Book_Availability>;
  /** An array relationship */
  book_categories: Array<Book_Categories>;
  /** An aggregate relationship */
  book_categories_aggregate: Book_Categories_Aggregate;
  /** fetch data from the table: "book_categories" using primary key columns */
  book_categories_by_pk?: Maybe<Book_Categories>;
  /** fetch data from the table in a streaming manner: "book_categories" */
  book_categories_stream: Array<Book_Categories>;
  /** fetch data from the table: "book_current_borrowers" */
  book_current_borrowers: Array<Book_Current_Borrowers>;
  /** fetch aggregated fields from the table: "book_current_borrowers" */
  book_current_borrowers_aggregate: Book_Current_Borrowers_Aggregate;
  /** fetch data from the table in a streaming manner: "book_current_borrowers" */
  book_current_borrowers_stream: Array<Book_Current_Borrowers>;
  /** fetch data from the table: "book_inventory" */
  book_inventory: Array<Book_Inventory>;
  /** fetch aggregated fields from the table: "book_inventory" */
  book_inventory_aggregate: Book_Inventory_Aggregate;
  /** fetch data from the table: "book_inventory" using primary key columns */
  book_inventory_by_pk?: Maybe<Book_Inventory>;
  /** fetch data from the table in a streaming manner: "book_inventory" */
  book_inventory_stream: Array<Book_Inventory>;
  /** An array relationship */
  book_loans: Array<Book_Loans>;
  /** An aggregate relationship */
  book_loans_aggregate: Book_Loans_Aggregate;
  /** fetch data from the table: "book_loans" using primary key columns */
  book_loans_by_pk?: Maybe<Book_Loans>;
  /** fetch data from the table in a streaming manner: "book_loans" */
  book_loans_stream: Array<Book_Loans>;
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table in a streaming manner: "books" */
  books_stream: Array<Books>;
  /** fetch data from the table: "books_with_inferred_genre" */
  books_with_inferred_genre: Array<Books_With_Inferred_Genre>;
  /** fetch aggregated fields from the table: "books_with_inferred_genre" */
  books_with_inferred_genre_aggregate: Books_With_Inferred_Genre_Aggregate;
  /** fetch data from the table in a streaming manner: "books_with_inferred_genre" */
  books_with_inferred_genre_stream: Array<Books_With_Inferred_Genre>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** fetch data from the table: "user_books" using primary key columns */
  user_books_by_pk?: Maybe<User_Books>;
  /** fetch data from the table in a streaming manner: "user_books" */
  user_books_stream: Array<User_Books>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAuthorsArgs = {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
};


export type Subscription_RootAuthors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
};


export type Subscription_RootAuthors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Authors_Stream_Cursor_Input>>;
  where?: InputMaybe<Authors_Bool_Exp>;
};


export type Subscription_RootBook_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


export type Subscription_RootBook_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Authors_Order_By>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


export type Subscription_RootBook_Authors_By_PkArgs = {
  author_id: Scalars['uuid']['input'];
  book_id: Scalars['uuid']['input'];
};


export type Subscription_RootBook_Authors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Authors_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Authors_Bool_Exp>;
};


export type Subscription_RootBook_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Book_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Availability_Order_By>>;
  where?: InputMaybe<Book_Availability_Bool_Exp>;
};


export type Subscription_RootBook_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Availability_Order_By>>;
  where?: InputMaybe<Book_Availability_Bool_Exp>;
};


export type Subscription_RootBook_Availability_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Availability_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Availability_Bool_Exp>;
};


export type Subscription_RootBook_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


export type Subscription_RootBook_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


export type Subscription_RootBook_Categories_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
  category_id: Scalars['String']['input'];
};


export type Subscription_RootBook_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
};


export type Subscription_RootBook_Current_BorrowersArgs = {
  distinct_on?: InputMaybe<Array<Book_Current_Borrowers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Current_Borrowers_Order_By>>;
  where?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
};


export type Subscription_RootBook_Current_Borrowers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Current_Borrowers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Current_Borrowers_Order_By>>;
  where?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
};


export type Subscription_RootBook_Current_Borrowers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Current_Borrowers_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Current_Borrowers_Bool_Exp>;
};


export type Subscription_RootBook_InventoryArgs = {
  distinct_on?: InputMaybe<Array<Book_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Inventory_Order_By>>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};


export type Subscription_RootBook_Inventory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Inventory_Order_By>>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};


export type Subscription_RootBook_Inventory_By_PkArgs = {
  book_id: Scalars['uuid']['input'];
};


export type Subscription_RootBook_Inventory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Inventory_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Inventory_Bool_Exp>;
};


export type Subscription_RootBook_LoansArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


export type Subscription_RootBook_Loans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


export type Subscription_RootBook_Loans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBook_Loans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Loans_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


export type Subscription_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBooks_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBooks_With_Inferred_GenreArgs = {
  distinct_on?: InputMaybe<Array<Books_With_Inferred_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_With_Inferred_Genre_Order_By>>;
  where?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
};


export type Subscription_RootBooks_With_Inferred_Genre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_With_Inferred_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_With_Inferred_Genre_Order_By>>;
  where?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
};


export type Subscription_RootBooks_With_Inferred_Genre_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Books_With_Inferred_Genre_Stream_Cursor_Input>>;
  where?: InputMaybe<Books_With_Inferred_Genre_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootUser_BooksArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


export type Subscription_RootUser_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


export type Subscription_RootUser_Books_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Books_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_books" */
export type User_Books = {
  __typename: 'user_books';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  purchased_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_books" */
export type User_Books_Aggregate = {
  __typename: 'user_books_aggregate';
  aggregate?: Maybe<User_Books_Aggregate_Fields>;
  nodes: Array<User_Books>;
};

export type User_Books_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Books_Aggregate_Bool_Exp_Count>;
};

export type User_Books_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_books" */
export type User_Books_Aggregate_Fields = {
  __typename: 'user_books_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Books_Max_Fields>;
  min?: Maybe<User_Books_Min_Fields>;
};


/** aggregate fields of "user_books" */
export type User_Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_books" */
export type User_Books_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Books_Max_Order_By>;
  min?: InputMaybe<User_Books_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_books" */
export type User_Books_Arr_Rel_Insert_Input = {
  data: Array<User_Books_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Books_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_books". All fields are combined with a logical 'AND'. */
export type User_Books_Bool_Exp = {
  _and?: InputMaybe<Array<User_Books_Bool_Exp>>;
  _not?: InputMaybe<User_Books_Bool_Exp>;
  _or?: InputMaybe<Array<User_Books_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  purchased_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_books" */
export enum User_Books_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserBooksPkey = 'user_books_pkey',
  /** unique or primary key constraint on columns "user_id", "book_id" */
  UserBooksUserIdBookIdKey = 'user_books_user_id_book_id_key'
}

/** input type for inserting data into table "user_books" */
export type User_Books_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchased_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Books_Max_Fields = {
  __typename: 'user_books_max_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  purchased_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_books" */
export type User_Books_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  purchased_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Books_Min_Fields = {
  __typename: 'user_books_min_fields';
  book_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  purchased_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_books" */
export type User_Books_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  purchased_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_books" */
export type User_Books_Mutation_Response = {
  __typename: 'user_books_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Books>;
};

/** on_conflict condition type for table "user_books" */
export type User_Books_On_Conflict = {
  constraint: User_Books_Constraint;
  update_columns?: Array<User_Books_Update_Column>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};

/** Ordering options when selecting data from "user_books". */
export type User_Books_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  purchased_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_books */
export type User_Books_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_books" */
export enum User_Books_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Id = 'id',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_books" */
export type User_Books_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchased_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_books" */
export type User_Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Books_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchased_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_books" */
export enum User_Books_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Id = 'id',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Books_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Books_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Books_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename: 'users';
  /** An array relationship */
  book_loans: Array<Book_Loans>;
  /** An aggregate relationship */
  book_loans_aggregate: Book_Loans_Aggregate;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
};


/** columns and relationships of "users" */
export type UsersBook_LoansArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersBook_Loans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Loans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Loans_Order_By>>;
  where?: InputMaybe<Book_Loans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_BooksArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Books_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  book_loans?: InputMaybe<Book_Loans_Bool_Exp>;
  book_loans_aggregate?: InputMaybe<Book_Loans_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  book_loans?: InputMaybe<Book_Loans_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_books?: InputMaybe<User_Books_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  book_loans_aggregate?: InputMaybe<Book_Loans_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename: 'query_root', users: Array<{ __typename: 'users', id: any, name: string, email?: string | null, book_loans_aggregate: { __typename: 'book_loans_aggregate', aggregate?: { __typename: 'book_loans_aggregate_fields', count: number } | null }, user_books_aggregate: { __typename: 'user_books_aggregate', aggregate?: { __typename: 'user_books_aggregate_fields', count: number } | null } }> };

export type AddUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type AddUserMutation = { __typename: 'mutation_root', insert_users_one?: { __typename: 'users', id: any, name: string, email?: string | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteUserMutation = { __typename: 'mutation_root', delete_users_by_pk?: { __typename: 'users', id: any } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename: 'mutation_root', update_users_by_pk?: { __typename: 'users', id: any, name: string, email?: string | null } | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename: 'query_root', books: Array<{ __typename: 'books', id: any, google_volume_id?: string | null, title?: string | null, description?: string | null, publisher?: string | null, published_date?: string | null, page_count?: number | null, language?: string | null, image_thumbnail_url?: string | null, info_link?: string | null, book_authors: Array<{ __typename: 'book_authors', ord: any, author: { __typename: 'authors', id: any, name?: string | null } }>, book_categories: Array<{ __typename: 'book_categories', category: { __typename: 'categories', id: string, comment?: string | null } }> }> };

export type AddBookMutationVariables = Exact<{
  object: Books_Insert_Input;
}>;


export type AddBookMutation = { __typename: 'mutation_root', insert_books_one?: { __typename: 'books', id: any, google_volume_id?: string | null, title?: string | null, book_authors: Array<{ __typename: 'book_authors', ord: any, author: { __typename: 'authors', id: any, name?: string | null } }>, book_categories: Array<{ __typename: 'book_categories', category: { __typename: 'categories', id: string, comment?: string | null } }> } | null };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  changes: Books_Set_Input;
}>;


export type UpdateBookMutation = { __typename: 'mutation_root', update_books_by_pk?: { __typename: 'books', id: any, title?: string | null } | null };

export type UpsertBookMutationVariables = Exact<{
  book: Books_Insert_Input;
}>;


export type UpsertBookMutation = { __typename: 'mutation_root', insert_books_one?: { __typename: 'books', id: any, google_volume_id?: string | null, title?: string | null, book_authors: Array<{ __typename: 'book_authors', ord: any, author: { __typename: 'authors', id: any, name?: string | null } }>, book_categories: Array<{ __typename: 'book_categories', category: { __typename: 'categories', id: string, comment?: string | null } }> } | null };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteBookMutation = { __typename: 'mutation_root', delete_books_by_pk?: { __typename: 'books', id: any } | null };

export type GetBooksPagedQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order_By>;
}>;


export type GetBooksPagedQuery = { __typename: 'query_root', books: Array<{ __typename: 'books', id: any, title?: string | null, language?: string | null, published_date?: string | null, image_thumbnail_url?: string | null, info_link?: string | null, description?: string | null, book_authors: Array<{ __typename: 'book_authors', ord: any, author: { __typename: 'authors', id: any, name?: string | null } }>, book_inventory?: { __typename: 'book_inventory', quantity: number } | null, book_loans_aggregate: { __typename: 'book_loans_aggregate', aggregate?: { __typename: 'book_loans_aggregate_fields', count: number } | null } }>, books_aggregate: { __typename: 'books_aggregate', aggregate?: { __typename: 'books_aggregate_fields', count: number } | null } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename: 'query_root', categories: Array<{ __typename: 'categories', id: string, comment?: string | null }> };

export type GetBooksByCategoryPagedQueryVariables = Exact<{
  categoryId: Scalars['String']['input'];
  q?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order_By>;
}>;


export type GetBooksByCategoryPagedQuery = { __typename: 'query_root', books: Array<{ __typename: 'books', id: any, title?: string | null, language?: string | null, published_date?: string | null, image_thumbnail_url?: string | null, info_link?: string | null, description?: string | null, book_authors: Array<{ __typename: 'book_authors', ord: any, author: { __typename: 'authors', id: any, name?: string | null } }>, book_inventory?: { __typename: 'book_inventory', quantity: number } | null, book_loans_aggregate: { __typename: 'book_loans_aggregate', aggregate?: { __typename: 'book_loans_aggregate_fields', count: number } | null } }>, books_aggregate: { __typename: 'books_aggregate', aggregate?: { __typename: 'books_aggregate_fields', count: number } | null } };

export type ActiveLoansForBookQueryVariables = Exact<{
  bookId: Scalars['uuid']['input'];
}>;


export type ActiveLoansForBookQuery = { __typename: 'query_root', book_loans: Array<{ __typename: 'book_loans', id: any, borrowed_at: any, due_at?: any | null, user: { __typename: 'users', id: any, name: string, email?: string | null } }> };

export type ReturnLoanMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  changes: Book_Loans_Set_Input;
}>;


export type ReturnLoanMutation = { __typename: 'mutation_root', update_book_loans_by_pk?: { __typename: 'book_loans', id: any, returned_at?: any | null } | null };

export type GetEligibleUsersForBookQueryVariables = Exact<{
  bookId: Scalars['uuid']['input'];
  q?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEligibleUsersForBookQuery = { __typename: 'query_root', users: Array<{ __typename: 'users', id: any, name: string, email?: string | null }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
    email
    book_loans_aggregate {
      aggregate {
        count
      }
    }
    user_books_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<never, GetUsersQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables | undefined>({ query: GetUsersDocument, variables: undefined, ...options });
};
export const AddUserDocument = gql`
    mutation AddUser($name: String!, $email: String!) {
  insert_users_one(object: {name: $name, email: $email}) {
    id
    name
    email
  }
}
    `;

export function useAddUserMutation() {
  return Urql.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: uuid!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $name: String!, $email: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name, email: $email}) {
    id
    name
    email
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const GetBooksDocument = gql`
    query GetBooks {
  books(order_by: {title: asc}) {
    id
    google_volume_id
    title
    book_authors(order_by: {ord: asc}) {
      ord
      author {
        id
        name
      }
    }
    book_categories {
      category {
        id
        comment
      }
    }
    description
    publisher
    published_date
    page_count
    language
    image_thumbnail_url
    info_link
  }
}
    `;

export function useGetBooksQuery(options?: Omit<Urql.UseQueryArgs<never, GetBooksQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetBooksQuery, GetBooksQueryVariables | undefined>({ query: GetBooksDocument, variables: undefined, ...options });
};
export const AddBookDocument = gql`
    mutation AddBook($object: books_insert_input!) {
  insert_books_one(object: $object) {
    id
    google_volume_id
    title
    book_authors(order_by: {ord: asc}) {
      ord
      author {
        id
        name
      }
    }
    book_categories {
      category {
        id
        comment
      }
    }
  }
}
    `;

export function useAddBookMutation() {
  return Urql.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument);
};
export const UpdateBookDocument = gql`
    mutation UpdateBook($id: uuid!, $changes: books_set_input!) {
  update_books_by_pk(pk_columns: {id: $id}, _set: $changes) {
    id
    title
  }
}
    `;

export function useUpdateBookMutation() {
  return Urql.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument);
};
export const UpsertBookDocument = gql`
    mutation UpsertBook($book: books_insert_input!) {
  insert_books_one(
    object: $book
    on_conflict: {constraint: books_google_volume_id_key, update_columns: [title, description, publisher, published_date, page_count, print_type, language, image_thumbnail_url, info_link, preview_link, canonical_volume_link, average_rating, ratings_count, industry_identifiers, sale_info, access_info, raw]}
  ) {
    id
    google_volume_id
    title
    book_authors(order_by: {ord: asc}) {
      ord
      author {
        id
        name
      }
    }
    book_categories {
      category {
        id
        comment
      }
    }
  }
}
    `;

export function useUpsertBookMutation() {
  return Urql.useMutation<UpsertBookMutation, UpsertBookMutationVariables>(UpsertBookDocument);
};
export const DeleteBookDocument = gql`
    mutation DeleteBook($id: uuid!) {
  delete_books_by_pk(id: $id) {
    id
  }
}
    `;

export function useDeleteBookMutation() {
  return Urql.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument);
};
export const GetBooksPagedDocument = gql`
    query GetBooksPaged($q: String = "%%", $limit: Int = 10, $offset: Int = 0, $order: order_by = asc) {
  books(
    where: {title: {_ilike: $q}}
    order_by: {title: $order}
    limit: $limit
    offset: $offset
  ) {
    id
    title
    language
    published_date
    image_thumbnail_url
    info_link
    description
    book_authors {
      ord
      author {
        id
        name
      }
    }
    book_inventory {
      quantity
    }
    book_loans_aggregate(where: {returned_at: {_is_null: true}}) {
      aggregate {
        count
      }
    }
  }
  books_aggregate(where: {title: {_ilike: $q}}) {
    aggregate {
      count
    }
  }
}
    `;

export function useGetBooksPagedQuery(options?: Omit<Urql.UseQueryArgs<never, GetBooksPagedQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetBooksPagedQuery, GetBooksPagedQueryVariables | undefined>({ query: GetBooksPagedDocument, variables: undefined, ...options });
};
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories(order_by: {comment: asc}) {
    id
    comment
  }
}
    `;

export function useGetCategoriesQuery(options?: Omit<Urql.UseQueryArgs<never, GetCategoriesQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables | undefined>({ query: GetCategoriesDocument, variables: undefined, ...options });
};
export const GetBooksByCategoryPagedDocument = gql`
    query GetBooksByCategoryPaged($categoryId: String!, $q: String = "%%", $limit: Int = 10, $offset: Int = 0, $order: order_by = asc) {
  books(
    where: {title: {_ilike: $q}, book_categories: {category: {id: {_eq: $categoryId}}}}
    order_by: {title: $order}
    limit: $limit
    offset: $offset
  ) {
    id
    title
    language
    published_date
    image_thumbnail_url
    info_link
    description
    book_authors {
      ord
      author {
        id
        name
      }
    }
    book_inventory {
      quantity
    }
    book_loans_aggregate(where: {returned_at: {_is_null: true}}) {
      aggregate {
        count
      }
    }
  }
  books_aggregate(
    where: {title: {_ilike: $q}, book_categories: {category: {id: {_eq: $categoryId}}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

export function useGetBooksByCategoryPagedQuery(options?: Omit<Urql.UseQueryArgs<never, GetBooksByCategoryPagedQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetBooksByCategoryPagedQuery, GetBooksByCategoryPagedQueryVariables | undefined>({ query: GetBooksByCategoryPagedDocument, variables: undefined, ...options });
};
export const ActiveLoansForBookDocument = gql`
    query ActiveLoansForBook($bookId: uuid!) {
  book_loans(where: {book_id: {_eq: $bookId}, returned_at: {_is_null: true}}) {
    id
    borrowed_at
    due_at
    user {
      id
      name
      email
    }
  }
}
    `;

export function useActiveLoansForBookQuery(options?: Omit<Urql.UseQueryArgs<never, ActiveLoansForBookQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<ActiveLoansForBookQuery, ActiveLoansForBookQueryVariables | undefined>({ query: ActiveLoansForBookDocument, variables: undefined, ...options });
};
export const ReturnLoanDocument = gql`
    mutation ReturnLoan($id: uuid!, $changes: book_loans_set_input!) {
  update_book_loans_by_pk(pk_columns: {id: $id}, _set: $changes) {
    id
    returned_at
  }
}
    `;

export function useReturnLoanMutation() {
  return Urql.useMutation<ReturnLoanMutation, ReturnLoanMutationVariables>(ReturnLoanDocument);
};
export const GetEligibleUsersForBookDocument = gql`
    query GetEligibleUsersForBook($bookId: uuid!, $q: String = "%%") {
  users(
    where: {_not: {book_loans: {book_id: {_eq: $bookId}, returned_at: {_is_null: true}}}, _or: [{name: {_ilike: $q}}, {email: {_ilike: $q}}]}
    order_by: {name: asc}
  ) {
    id
    name
    email
  }
}
    `;

export function useGetEligibleUsersForBookQuery(options?: Omit<Urql.UseQueryArgs<never, GetEligibleUsersForBookQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetEligibleUsersForBookQuery, GetEligibleUsersForBookQueryVariables | undefined>({ query: GetEligibleUsersForBookDocument, variables: undefined, ...options });
};