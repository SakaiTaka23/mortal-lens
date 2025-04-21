import {
  Accordion,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <h1>Mortal Lens</h1>
      <Accordion>
        <AccordionSummary>Diff Level</AccordionSummary>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell>Optimal</TableCell>
              <TableCell align='right'>~99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moderate</TableCell>
              <TableCell align='right'>~25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Significant</TableCell>
              <TableCell align='right'>~5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Critical</TableCell>
              <TableCell align='right'>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Accordion>
      <Accordion>
        <AccordionSummary>Tags</AccordionSummary>
        <Table size='small'>
          <TableRow>
            <TableCell>riichi1</TableCell>
            <TableCell>One riichi from opponent</TableCell>
            <TableCell>riichi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>riichi2</TableCell>
            <TableCell>Two, three riichi from opponent</TableCell>
            <TableCell>riichi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2fuuro</TableCell>
            <TableCell>Opponent with two fuuro exists</TableCell>
            <TableCell>naki</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>myfuuro</TableCell>
            <TableCell>You have fuuro</TableCell>
            <TableCell>naki</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>dora</TableCell>
            <TableCell>Diff related to dora</TableCell>
            <TableCell>dora</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jihai&jihai</TableCell>
            <TableCell>Diff with both expected and actual jihai</TableCell>
            <TableCell>balance</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jihai&suhai</TableCell>
            <TableCell>
              Diff with expected and actual being jihai and suhai
            </TableCell>
            <TableCell>balance</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>suhai&suhai</TableCell>
            <TableCell>Diff with both expected and actual suhai</TableCell>
            <TableCell>balance</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>naki</TableCell>
            <TableCell>Diff about naki decisions</TableCell>
            <TableCell>decision</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>riichi</TableCell>
            <TableCell>Diff about riichi decisions</TableCell>
            <TableCell>decision</TableCell>
          </TableRow>
        </Table>
      </Accordion>
    </>
  );
}

export default App;
