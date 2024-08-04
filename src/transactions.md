 - what is transactions in db ?
```
In real life situations we might execute a seris a queries in order to execute a task

- means these series of operations/queries can execute a single unit of task and hence these series of ops are called as DB transactions
```

- 4 transactions capabilites a data can opt for 
```
1. Atomicity 
A transactions is a bundle of statements that intends to achieve one final state. in this want to complete all the statements or none of them we never want an intermediate state.
It's have 3 states - [begin, commit, rollback]
- begin - initial state of the transactions
- commit - successfully completed the transactions.
- rollback - somethings happend in b/w transactions wholever changes were successfully aborted

2. Consistency 
The data stored in a db is always valid and in a consistent state like all the constraint should be applied successfully

3. Isolation
It is a ability of multiple transactions to execute without interrupt with one another

4. Durabilit 
If somethings changed in the DB and any unfor seen circumstances happend then our changes should be persist during these situations

```

- ## how database ensure atomicity ?
```
1. logging - dbms logs all the actions that is going so that later  it can undo
2. shadow paging - dbms make copies of transactions and these copies is intially considered as a temp copy.
if transactions successed then it starts pointing to the new temp copy
```

- atomicity for mysql

```
after end commit or rollback db needs to remains in a consistent states
in order to handle rollback we have - undo log, redo log

undo log - 
```